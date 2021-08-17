interface Course extends DBObject {
  paper: number;
  popper: number;
  gunReady: boolean;
  chamberReady: boolean;
  noShoot?: number;
  startingPosition?: string;
  handgunReadyDetail?: string;
  procedure?: string;
  designer?: string;
}
