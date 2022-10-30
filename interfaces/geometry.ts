interface Geometry {
  latitude: number,
  longitude: number,
}

interface PreTransformationGeometry {
  WGS84: string
}

export {Geometry, PreTransformationGeometry}