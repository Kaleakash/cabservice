import { Component,OnInit } from '@angular/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
//import { markers } from './marker-list';
import { AreaInfo } from './areaInfo';
import { AreaService } from '../area.service';
import {FormGroup,FormControl}  from '@angular/forms'
@Component({
  selector: 'app-areas-served',
  templateUrl: 'areas-served.component.html',
  styleUrls: ['areas-served.component.css']
})
export class AreasServedComponent implements OnInit{
  lat = 12.972442;
  lng = 77.580643;
  map: GoogleMap;

  areaInfoForm=new FormGroup({

    areaName:new FormControl(),
    latitude:new FormControl(),
    longitude:new FormControl()
  });
  areas: AreaInfo[] [];
  tokenInfo:boolean=false;
  constructor(public areaService:AreaService){}

  ngOnInit(): void {
        this.getAllAreaDetails();
        //let obj = localStorage.getItem("token");
        let obj = localStorage.getItem("role");
        if(obj!=null){
          
          if(obj=="admin"){
            this.tokenInfo=true;
          }
        }

  }
  getAllAreaDetails(){
    this.areaService.getAllAreaDetails().subscribe({
      next:(result:any)=> {
          //console.log(result)
          this.areas=result.areaForms;
      },
      error:(error:any)=> {

      },
      complete:()=> {
        console.log("daone")
      }

    })
  }
  public getMapInstance(map: GoogleMap) {
    this.map = map;
  }

  public resetMap() {
    this.map.setCenter({ lat: 12.972442, lng: 77.580643 });
    console.log('resetMap Method executed');
  }

  storeAreaInfoDetails(){
    let areaInfo = this.areaInfoForm.value;
    this.areaService.createAreaDetails(areaInfo).subscribe({
      next:(result:any)=> {
          console.log(result);
      },
      error:(error:any)=> {

      },
      complete:()=> {
        this.getAllAreaDetails();
      }
    })
    this.areaInfoForm.reset();
  }
}
