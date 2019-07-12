import React, {Component} from 'react';
import { View } from 'react-native';
import {getMetricMetalInfo} from '../utils/helpers';
import Stepper from './Stepper';
import Slider from './Slider';

export default class AddEntry extends Component{
  state = {
    run: 0, 
    swim: 0,
    bike: 0,
    eat: 0,
    sleep: 0
  }
  increment = (metric) => {
    const {max, step} = getMetricMetalInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    })
    )
  }

  render(){
    const metaInfo = getMetricMetalInfo()
    return(
      <View>
        {Object.keys(metaInfo).map((key) => {
          const {getIcons, type, ...rest} = metaInfo[key]
          const value = this.state[key]

          return (
            <View key = {key}>
              {getIcons()}
              {type === 'slider' ? <Slider/> : <Stepper/>
              }
            </View>
          )
        }
        )}
      </View>
    );
  }

}