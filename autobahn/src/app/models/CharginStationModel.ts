// Create a new file, e.g., charging-station.model.ts

export interface ChargingStationModel {
  extent: string;
  identifier: string;
  routeRecommendation: any[];
  coordinate: {
    lat: string;
    long: string;
  };
  footer: any[];
  icon: string;
  isBlocked: string;
  description: string[];
  title: string;
  point: string;
  display_type: string;
  lorryParkingFeatureIcons: any[];
  future: boolean;
  subtitle: string;
}

