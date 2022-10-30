import { Geometry } from "../interfaces/geometry";

const wgs84Parser = {
  parse: function parse(wgs84Str: string): Geometry {
    const splitLetters = wgs84Str.split("POINT ");
    const splitLonLat = splitLetters[1].split(" ")
    
    return {
      longitude: parseFloat(splitLonLat[0].slice(1)),
      latitude: parseFloat(splitLonLat[1].slice(0, -1)),
    };
  }
}

export default wgs84Parser;