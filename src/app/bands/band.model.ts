export class Band {
  public name: string;
  public description: string;
  public imagePath: string;
  public videoPath: string;

  constructor(name: string, desc:string, imagePath: string, videoPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.videoPath = videoPath;
  }
}