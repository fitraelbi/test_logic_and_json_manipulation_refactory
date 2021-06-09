data = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
  ]

// Find items in the Meeting Room
let item_in_Meeting_Room = data.filter(item => item.placement.name == "Meeting Room" )
// console.log(item_in_Meeting_Room)

// Find all electronic devices
let item_electronic_device= data.filter(item => item.type == "electronic" )
//console.log(item_electronic_device)

// Find all the furniture.
let item_furniture= data.filter(item => item.type == "furniture" )
// console.log(item_furniture)

let date = (timestamp) => {
  const date = new Date(timestamp * 1000)  
  const arr =  [ date.getDate(), date.getMonth()+1, date.getFullYear() ]
  console.log(arr)
  return arr.join(" ")
}

// Find item with time 20 januari 2020.
let item_purchase_at = data.filter(item => date(item.purchased_at) == "16 1 2020")


console.log(item_purchase_at)

// Find all item brown.
let item_brown= data.filter(item => item.tags.includes("brown") == true )
// console.log(item_brown)