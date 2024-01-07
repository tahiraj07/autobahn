export interface RoadsModel {
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
  startTimestamp: string;
}
