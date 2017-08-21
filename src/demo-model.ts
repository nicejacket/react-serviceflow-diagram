export const DATA = {
  "elements": [
    {
      "completed": true,
      "current": false,
      "id": "theStart",
      "name": null,
      "incomingFlows": [],
      "x": 75,
      "y": 300,
      "width": 30,
      "height": 30,
      "type": "StartEvent"
    },
    {
      "completed": true,
      "current": false,
      "id": "provideNewSalesLead",
      "name": "Provide new sales lead",
      "incomingFlows": [
        "flow1"
      ],
      "x": 165,
      "y": 275,
      "width": 100,
      "height": 80,
      "type": "UserTask",
      "properties": [
        {
          "name": "Assignee",
          "value": "${initiator}"
        }
      ]
    },
    {
      "completed": true,
      "current": true,
      "id": "reviewSalesLeadSubProcess",
      "name": "Review sales lead",
      "incomingFlows": [
        "flow2",
        "flow12"
      ],
      "x": 315,
      "y": 160,
      "width": 544,
      "height": 320,
      "type": "SubProcess"
    },
    {
      "completed": false,
      "current": false,
      "id": "subProcessStart",
      "name": null,
      "incomingFlows": [],
      "x": 360,
      "y": 300,
      "width": 30,
      "height": 30,
      "type": "StartEvent"
    },
    {
      "completed": false,
      "current": true,
      "id": "fork",
      "name": null,
      "incomingFlows": [
        "flow3"
      ],
      "x": 435,
      "y": 295,
      "width": 40,
      "height": 40,
      "type": "ParallelGateway"
    },
    {
      "completed": false,
      "current": false,
      "id": "reviewCustomerRating",
      "name": "Review customer rating",
      "incomingFlows": [
        "flow5"
      ],
      "x": 517,
      "y": 210,
      "width": 100,
      "height": 80,
      "type": "UserTask",
      "properties": [
        {
          "name": "Candidate groups",
          "value": "accountancy"
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "subProcessEnd1",
      "name": null,
      "incomingFlows": [
        "flow6"
      ],
      "x": 670,
      "y": 236,
      "width": 28,
      "height": 28,
      "type": "EndEvent"
    },
    {
      "completed": true,
      "current": true,
      "id": "reviewProfitability",
      "name": "Review profitability",
      "incomingFlows": [
        "flow4"
      ],
      "x": 517,
      "y": 360,
      "width": 100,
      "height": 80,
      "type": "UserTask",
      "properties": [
        {
          "name": "Candidate groups",
          "value": "management"
        }
      ]
    },
    {
      "completed": true,
      "current": false,
      "id": "enoughInformationCheck",
      "name": "Enough information?",
      "incomingFlows": [
        "flow7"
      ],
      "x": 664,
      "y": 380,
      "width": 40,
      "height": 40,
      "type": "ExclusiveGateway"
    },
    {
      "completed": true,
      "current": false,
      "id": "subProcessEnd2",
      "name": null,
      "incomingFlows": [
        "flow9"
      ],
      "x": 765,
      "y": 386,
      "width": 28,
      "height": 28,
      "type": "EndEvent"
    },
    {
      "completed": false,
      "current": true,
      "id": "notEnoughInformationEnd",
      "name": null as any,
      "incomingFlows": [
        "flow8"
      ],
      "x": 765,
      "y": 345,
      "width": 28,
      "height": 28,
      "type": "EndEvent",
      "eventDefinition": {
        "type": "error",
        "errorCode": "notEnoughInfoError"
      }
    },
    {
      "completed": false,
      "current": true,
      "id": "catchNotEnoughInformationError",
      "name": null,
      "incomingFlows": [],
      "x": 783.8620689660311,
      "y": 465,
      "width": 30,
      "height": 30,
      "type": "BoundaryEvent",
      "eventDefinition": {
        "type": "error",
        "errorCode": "notEnoughInfoError"
      }
    },
    {
      "completed": false,
      "current": false,
      "id": "provideAdditionalDetails",
      "name": "Provide additional details",
      "incomingFlows": [
        "flow11"
      ],
      "x": 660,
      "y": 525,
      "width": 100,
      "height": 80,
      "type": "UserTask",
      "properties": [
        {
          "name": "Assignee",
          "value": "${initiator}"
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "storeLeadInCrmSystem",
      "name": "Store lead in CRM system",
      "incomingFlows": [
        "flow10"
      ],
      "x": 910,
      "y": 275,
      "width": 100,
      "height": 80,
      "type": "ManualTask"
    },
    {
      "completed": false,
      "current": false,
      "id": "processEnd",
      "name": null,
      "incomingFlows": [
        "flow13"
      ],
      "x": 1050,
      "y": 301,
      "width": 28,
      "height": 28,
      "type": "EndEvent"
    }
  ],
  "flows": [
    {
      "completed": true,
      "current": false,
      "id": "flow1",
      "type": "sequenceFlow",
      "sourceRef": "theStart",
      "targetRef": "provideNewSalesLead",
      "waypoints": [
        {
          "x": 105,
          "y": 315
        },
        {
          "x": 165,
          "y": 315
        }
      ]
    },
    {
      "completed": true,
      "current": false,
      "id": "flow2",
      "type": "sequenceFlow",
      "sourceRef": "provideNewSalesLead",
      "targetRef": "reviewSalesLeadSubProcess",
      "waypoints": [
        {
          "x": 265,
          "y": 315
        },
        {
          "x": 290,
          "y": 315
        },
        {
          "x": 315,
          "y": 316
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow3",
      "type": "sequenceFlow",
      "sourceRef": "subProcessStart",
      "targetRef": "fork",
      "waypoints": [
        {
          "x": 390,
          "y": 315
        },
        {
          "x": 435,
          "y": 315
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow4",
      "type": "sequenceFlow",
      "sourceRef": "fork",
      "targetRef": "reviewProfitability",
      "waypoints": [
        {
          "x": 455,
          "y": 335
        },
        {
          "x": 455,
          "y": 400
        },
        {
          "x": 517,
          "y": 400
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow5",
      "type": "sequenceFlow",
      "sourceRef": "fork",
      "targetRef": "reviewCustomerRating",
      "waypoints": [
        {
          "x": 455,
          "y": 295
        },
        {
          "x": 455,
          "y": 250
        },
        {
          "x": 517,
          "y": 250
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow6",
      "type": "sequenceFlow",
      "sourceRef": "reviewCustomerRating",
      "targetRef": "subProcessEnd1",
      "waypoints": [
        {
          "x": 617,
          "y": 250
        },
        {
          "x": 670,
          "y": 250
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow7",
      "type": "sequenceFlow",
      "sourceRef": "reviewProfitability",
      "targetRef": "enoughInformationCheck",
      "waypoints": [
        {
          "x": 617,
          "y": 400
        },
        {
          "x": 664,
          "y": 400
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow8",
      "type": "sequenceFlow",
      "sourceRef": "enoughInformationCheck",
      "targetRef": "notEnoughInformationEnd",
      "waypoints": [
        {
          "x": 684,
          "y": 380
        },
        {
          "x": 684,
          "y": 359
        },
        {
          "x": 765,
          "y": 359
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow9",
      "type": "sequenceFlow",
      "sourceRef": "enoughInformationCheck",
      "targetRef": "subProcessEnd2",
      "waypoints": [
        {
          "x": 704,
          "y": 400
        },
        {
          "x": 765,
          "y": 400
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow10",
      "type": "sequenceFlow",
      "sourceRef": "reviewSalesLeadSubProcess",
      "targetRef": "storeLeadInCrmSystem",
      "waypoints": [
        {
          "x": 859,
          "y": 317
        },
        {
          "x": 910,
          "y": 315
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow11",
      "type": "sequenceFlow",
      "sourceRef": "catchNotEnoughInformationError",
      "targetRef": "provideAdditionalDetails",
      "waypoints": [
        {
          "x": 798,
          "y": 495
        },
        {
          "x": 798,
          "y": 565
        },
        {
          "x": 760,
          "y": 565
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow12",
      "type": "sequenceFlow",
      "sourceRef": "provideAdditionalDetails",
      "targetRef": "reviewSalesLeadSubProcess",
      "waypoints": [
        {
          "x": 660,
          "y": 565
        },
        {
          "x": 587,
          "y": 565
        },
        {
          "x": 587,
          "y": 480
        }
      ]
    },
    {
      "completed": false,
      "current": false,
      "id": "flow13",
      "type": "sequenceFlow",
      "sourceRef": "storeLeadInCrmSystem",
      "targetRef": "processEnd",
      "waypoints": [
        {
          "x": 1010,
          "y": 315
        },
        {
          "x": 1050,
          "y": 315
        }
      ]
    }
  ],
  "diagramBeginX": 90,
  "diagramBeginY": 160,
  "diagramWidth": 1078,
  "diagramHeight": 605,
  "completedActivities": [
    "theStart",
    "provideNewSalesLead",
    "reviewSalesLeadSubProcess",
    "fork",
    "subProcessStart",
    "reviewProfitability",
    "reviewCustomerRating",
    "subProcessEnd1"
  ],
  "currentActivities": [
    "reviewSalesLeadSubProcess",
    "catchNotEnoughInformationError",
    "reviewProfitability"
  ],
  "completedSequenceFlows": [
    "flow1",
    "flow2"
  ]
};
