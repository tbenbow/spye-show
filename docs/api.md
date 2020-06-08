

# DATA TYPES
Here's a quick reference of data types per table.

Project
  - id,
  - name,
  - slideOrder,
- Layout
  - id
  - width
  - height
  - css
  - Zones
    - id
    - x
    - y
    - width
    - height
- Slide
  - id
  - name
  - duration
  - bgType
  - bgVideo
  - bgImage
  - bgColor
  - blocks
    - zoneId: blockId
- Block
  - id
  - name
  - template
  - bgType
  - bgImage
  - bgColor
  - heading
    - h1
    - h2
    - h3
  - content


# API GET CALLS

## Home
url: /
```
  "projects": {
    "byId" : {
      "project1" : {
        "id" : "project1",
        name : "Project 1",
      },
      "project2" : {
        "id" : "project2",
        name : "Project 2",
      },
      ...
    },
    "allIds: ["project1", "project2", ...]
  },
```


## Layout
url: /layout/
```
  "layout": {
    "id": "layout1",
    "width": 3320,
    "height": 1280,
    "zones": [
      {
        "id": "zone1",
        "x": 0,
        "y": 0,
        "width": 640,
        "height": 1262
      },
      {
        "id": "zone2",
        "x": 840,
        "y": 0,
        "width": 640,
        "height": 1262
      },
      ...
    ],
    "css": "body { font-family: 'Avenir'; color: #FFFFFF; } h1 { font-size: 65px; }"
  },
```


## Project
url: /project/
```
  "project": {
    "name": "Project Name",
    "layout": "layout1",
    "slides": {
      "byId" : {
        "slide1" : {
          "id" : "slide1",
          "name" : "Slide 1",
        },
        "slide2" : {
          "id" : "slide2",
          "name" : "Slide 2",
        },
        ...
      },
      "allIds": ["slide1", "slide2", ...]
    },
  }
```


## Slide Details
url: /slide/1
```
  "slide1": {
    "id": "slide1",
    "name": "Slide 1",
    "duration": 90,
    "bgType": "video",
    "bgVideo": "dropbox/path",
    "bgImage": null,
    "bgColor": null,
    "blocks": {
      "byId" : {
        "block1" : {
          "id" : "block1",
          "name" : "Block 1",
        },
        "block2" : {
          "id" : "block2",
          "name" : "Block 2",
        },
        ...
      },
      "allIds": ["block1", "block2", ...]
    },
  }
```


## Block Details
url: /block/1
```
  "block1": {
    "id": "block1",
    "name": "Block 1",
    "template": "html",
    "bgType": "none",
    "bgImage": null,
    "bgColor": null,
    "heading": {
      "h1": "This is a title",
      "h2": "This is a sub-title",
      "h3": "This is a second sub-title"
    },
    "content": "<p>This is some html content.</p>"
  }
```


## Full Project
We will need a call that loads the full project for the frontend and preview functionality.

```
"project1": {
  "id": "project1",
  "name": "Project Name",
  "slideOrder": ["slide1", "slide2", ...],
  "slides": {
    "slide1": {
      "id": "slide1",
      "name": "Slide 1",
      "duration": 90,
      "bgType": "video",
      "bgVideo": "dropbox/path",
      "bgImage": null,
      "bgColor": null,
      "zones": {
        "zone1": "block1",
        "zone2": "block2",
        ...
      }
    },
    ...
  },
  "blocks": {
    "byId" : {
      "block1" : {
        "id": "block1",
        "name": "Block 1",
        "template": "html",
        "bgType": "none",
        "bgImage": null,
        "bgColor": null,
        "heading": {
          "h1": "This is a title",
          "h2": "This is a sub-title",
          "h3": "This is a second sub-title"
        },
        "content": "<p>This is some html content.</p>"
      },
      "block2" : {
        "id": "block2",
        "name": "Block 2",
        "template": "none",
        "bgType": "none",
        "bgImage": null,
        "bgColor": null,
      },
      ...
    }
  },
  "layout": {
    "width": 3320,
    "height": 1280,
    "zones": [
      {
        "id": "zone1",
        "x": 0,
        "y": 0,
        "width": 640,
        "height": 1262
      },
      "zone2": {
        "id": "zone2",
        "x": 840,
        "y": 0,
        "width": 640,
        "height": 1262
      },
      ...
    ],
    "css": "body { font-family: 'Avenir'; color: #FFFFFF; } h1 { font-size: 65px; }"
  },
}
```


# API POST CALLS


## Project

Create
```
{
  name: "Project 1"
}
```

Update
```
{
  "id": "project1"
  "name": "Project 1",
  "slideOrder: ["slide1", "slide2", ...]
}
```

Delete
```
{
  id: "project1"
}
```

## Layout
Layout cannot be created or deleted it should be setup with defaults on project creation.

Update
```
{
  "width": 3320,
  "height": 1280,
  "css": "body { font-family: 'Avenir'; color: #FFFFFF; } h1 { font-size: 65px; }",
  "zones": [
    {
      "x": 0,
      "y": 0,
      "width": 640,
      "height": 1262
    },
    {
      "x": 840,
      "y": 0,
      "width": 640,
      "height": 1262
    },
    ...
  ],
}
```


## Slide Details

Create
```
{
  "name": "Slide 1"
}
```

Update
```
{
  "id": "slide1",
  "name": "Slide 1",
  "duration": 90,
  "bgType": "video",
  "bgVideo": "dropbox/path",
  "bgImage": null,
  "bgColor": null,
  "blocks": ["block1", "block2", ...]
}
```

Delete
```
{
  "id": "slide1"
}
```


## Block Details

Create
```
{
  "name": "Block 1",
}
```

Update
```
{
  "id": "block1",
  "name": "Block 1",
  "template": "html",
  "bgType": "none",
  "bgImage": null,
  "bgColor": null,
  "heading": {
    "h1": "This is a title",
    "h2": "This is a sub-title",
    "h3": "This is a second sub-title"
  },
  "content": "<p>This is some html content.</p>"
}
```

Delete
```
{
  "id": "block1"
}
```
