export const DATA = {
   elements:[
      {
         id:"theStart",
         name:"",
         x:0.0,
         y:96.0,
         width:30.0,
         height:30.0,
         type:"StartEvent",
         eventDefinition:{
            type:"timer",
            timeDuration:"PT1H"
         },
         properties:[]
      }, {
         id:"exclusiveGw",
         name:"Exclusive Timer duration gateway",
         x:80.0,
         y:91.0,
         width:40.0,
         height:40.0,
         type:"ExclusiveGateway"
      }, {
         id:"longTimerTask",
         name:"Task with timer on it",
         x:170.0,
         y:0.0,
         width:100.0,
         height:60.0,
         type:"UserTask",
         properties:[
            {
               name:"Documentation",
               value:"This task has a timer on it"
            }
         ]
      }, {
         id:"longTimer",
         name:"",
         x:235.12666244524905,
         y:45.12666244524905,
         width:31.0,
         height:31.0,
         type:"BoundaryEvent",
         eventDefinition:{
            type:"timer",
            timeDuration:"PT1H"
         }, properties:[
            {
               name:"Timer duration",
               value:"PT1H"
            }
         ]
      }, {
         id:"longTimerExpire",
         name:"Execute script",
         x:170.0,
         y:320.0,
         width:100.0,
         height:60.0,
         type:"ScriptTask"
      }, {
         id:"shortTimerTask",
         name:"my task",
         x:170.0,
         y:160.0,
         width:100.0,
         height:60.0,
         type:"UserTask",
         properties:[

         ]
      }, {
         id:"shortTimer",
         name:"",
         x:235.12666244524905,
         y:205.12666244524905,
         width:31.0,
         height:31.0,
         type:"IntermediateCatchEvent",
         eventDefinition:{
            type:"error",
            timeDuration:"PT10S"
         }, properties:[
            {
               name:"Timer duration",
               value:"PT10S"
            }
         ]
      }, {
         id:"shortTimerExpire",
         name:"Execute script",
         x:170.0,
         y:480.0,
         width:100.0,
         height:60.0,
         type:"ScriptTask"
      }, {
         id:"theEnd",
         name:"",
         x:320.0,
         y:255.0,
         width:28.0,
         height:28.0,
         type:"EndEvent",
         properties:[

         ]
      }
   ],
   flows:[
      {
         id:"flow1",
         type:"sequenceFlow",
         sourceRef:"theStart",
         targetRef:"exclusiveGw",
         waypoints:[
            {
               x:30.0,
               y:111.0
            }, {
               x:80.0,
               y:111.0
            }
         ],
         properties:[

         ]
      }, {
         id:"flow2",
         type:"sequenceFlow",
         sourceRef:"exclusiveGw",
         targetRef:"longTimerTask",
         waypoints:[
            {
               x:120.0,
               y:111.0
            }, {
               x:132.0,
               y:111.0
            }, {
               x:132.0,
               y:30.000000000000007
            }, {
               x:170.0,
               y:30.0
            }
         ],
         properties:[
            {
               name:"Condition expression",
               value:"${duration == 'long'}"
            }
         ]
      }, {
         id:"flow3",
         type:"sequenceFlow",
         sourceRef:"exclusiveGw",
         targetRef:"shortTimerTask",
         waypoints:[
            {
               x:120.0,
               y:111.0
            }, {
               x:132.0,
               y:111.0
            }, {
               x:132.0,
               y:190.0
            }, {
               x:170.0,
               y:190.0
            }
         ],
         properties:[
            {
               name:"Condition expression",
               value:"${duration == 'short'}"
            }
         ]
      }, {
         id:"flow4",
         type:"sequenceFlow",
         sourceRef:"longTimerTask",
         targetRef:"theEnd",
         waypoints:[
            {
               x:270.0,
               y:30.0
            }, {
               x:282.0,
               y:30.0
            }, {
               x:282.0,
               y:270.0
            }, {
               x:320.0025880395821,
               y:269.2691809992388
            }
         ],
         properties:[

         ]
      }, {
         id:"flow5",
         type:"sequenceFlow",
         sourceRef:"longTimer",
         targetRef:"longTimerExpire",
         waypoints:[
            {
               x:250.5556978127468,
               y:76.12649999346013
            }, {
               x:250.0,
               y:197.5
            }, {
               x:280.0,
               y:197.5
            }, {
               x:280.0,
               y:390.0
            }, {
               x:220.0,
               y:390.0
            }, {
               x:220.0,
               y:380.0
            }
         ],
         properties:[

         ]
      }, {
         id:"flow6",
         type:"sequenceFlow",
         sourceRef:"longTimerExpire",
         targetRef:"theEnd",
         waypoints:[
            {
               x:270.0,
               y:350.0
            }, {
               x:282.0,
               y:350.0
            }, {
               x:282.0,
               y:270.0
            }, {
               x:320.0025880395821,
               y:269.2691809992388
            }
         ],
         properties:[

         ]
      }, {
         id:"flow7",
         type:"sequenceFlow",
         sourceRef:"shortTimerTask",
         targetRef:"theEnd",
         waypoints:[
            {
               x:270.0,
               y:190.0
            }, {
               x:282.0,
               y:190.0
            }, {
               x:282.0,
               y:270.0
            }, {
               x:320.0025880395821,
               y:269.2691809992388
            }
         ],
         properties:[

         ]
      }, {
         id:"flow8",
         type:"sequenceFlow",
         sourceRef:"shortTimer",
         targetRef:"shortTimerExpire",
         waypoints:[
            {
               x:250.5556978127468,
               y:236.12649999346013
            }, {
               x:250.0,
               y:357.5
            }, {
               x:280.0,
               y:357.5
            }, {
               x:280.0,
               y:550.0
            }, {
               x:220.0,
               y:550.0
            }, {
               x:220.0,
               y:540.0
            }
         ],
         properties:[

         ]
      }, {
         id:"flow9",
         type:"sequenceFlow",
         sourceRef:"shortTimerExpire",
         targetRef:"theEnd",
         waypoints:[
            {
               x:270.0,
               y:510.0
            }, {
               x:282.0,
               y:510.0
            }, {
               x:282.0,
               y:270.0
            }, {
               x:320.0025880395821,
               y:269.2691809992388
            }
         ],
         properties:[

         ]
      }
   ],
   diagramBeginX:15.0,
   diagramBeginY:0.0,
   diagramWidth:350.0,
   diagramHeight:550.0
};
