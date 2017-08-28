import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBaseImage } from '../RaphaelBaseImage';

const DATA = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBA
      JqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIHSURBVDiNpVI7a1RREP7mzLl3d+9mScxaiBLFwohxQcXCwjwao/gqFAQhRGOphQgmgs9oGxaV
      gFhpYPUPGMFCCzEqCgETg0uK4CuFoLhZyWNf994zFrqy9xJWwQ+mOB8z33wzZ4D/BIWJppG+plstc+mjK9yttbzALHExcoDaRxdqeRUWcFkGBz7G1s152CCQ7dUAqNOLuZf
      qOmi439MmhifF86e6uLj4MFXoCuVXWPkp2vZkZlkHYvRNAJYwtz79oXdMLfFMSMD2Dd9YdoSGTO9hQLoBQBESQvLpUNaZD1sGsN8d390dFBjpiwooHVBW6tvXCr2H4EFo6L
      wR97pkj9h/BByWfgDrA4lRTWDvHIPOAihVaWO8txCkygu50wBAsbsnWpT2pwHEA/sgXC30Zq4BwJfHHRdY0R4nxp5mbFGEJIB5l2SjVtoMhYsBfC5EikPVh7Z4uFyqnKq43
      hoQFrXCIydCjZbWlyl+79gzCDprq1dPnnyhS8nNZDmvRVmbAIDhKyL5/e2kjKi4pbwxLQZniDAOgAHAybW90aXmncp2xoSsvdVDMWBAAi69sqsvqsLxzARB7vxaMHvJDwcT
      ZCVeClnhIwqC5Pb08Kp3CgBUxT4PINc4u+u54uY8FLfXLQa+sx0dRNV2eXSi6OzryK2c7Wkl0msB5OuG0JVsOvnqL03+DT8BxkC5RkIpSlIAAAAASUVORK5CYII=`;

export interface RaphaelIconGoogleDrivePublishProps extends BaseElementProps {}

export default class RaphaelIconGoogleDrivePublish extends React.Component<RaphaelIconGoogleDrivePublishProps, any> {
  render() {
    return (<RaphaelBaseImage
      src={DATA}
      width={16}
      height={17}
      x={this.props.x}
      y={this.props.y}
    />);
  }
}
