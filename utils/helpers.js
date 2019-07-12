import React from 'react'
import {View} from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { white } from './colors'

export function isBetween(num, x, y) {
  if (num >= x && num <= y) {
    return true
  }

  return false
}

export function calculateDirection(heading) {
  let direction = ''

  if (isBetween(heading, 0, 22.5)) {
    direction = 'North'
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = 'North East'
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = 'East'
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = 'South East'
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = 'South'
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = 'South West'
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = 'West'
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = 'North West'
  } else if (isBetween(heading, 337.5, 360)) {
    direction = 'North'
  } else {
    direction = 'Calculating'
  }

  return direction
}

export function getMetricMetalInfo(metric){
 const info = { 
   run:{
    displaName: 'Run',
    max: 50,
    type: "steppers",
    unit: 'miles',
    step: 1,
    getIcons(){
     return(
       <View>
         <MaterialCommunityIcons name="run" color={"black"} size={100} />
       </View>
     );
    }
   },

   bike:{
    displaName: 'Bike',
    max: 5000,
    type: "steppers",
    unit: 'miles',
    step: 1,
    getIcons(){
     return(
       <View>
         <MaterialCommunityIcons name="bike" color={"black"} size={100} />
       </View>
     );
    }
   },

   swim:{
    displaName: 'Swim',
    max: 9900,
    type: "steppers",
    unit: 'meters',
    step: 100,
    getIcons(){
     return(
       <View>
         <MaterialCommunityIcons name="swim" color={"blue"} size={100} />
       </View>
     );
    }
   },

   sleep:{
    displaName: 'Sleep',
    max: 24,
    type: "slider",
    unit: 'miles',
    step: 1,
    getIcons(){
     return(
       <View>
         <MaterialCommunityIcons name="sleep" color={"black"} size={100} />
       </View>
     );
    }
   },

   eat:{
    displaName: 'Eat',
    max: 10,
    type: "slider",
    unit: 'miles',
    step: 1,
    getIcons(){
     return(
       <View>
         <MaterialCommunityIcons name="food" color={"black"} size={100} />
       </View>
     );
    }
   }
  } 
  return typeof metric === 'undefined' ? info : info[metric];
}

export function timeToString(time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}