export class Band {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public videoPath: string;

  constructor(id: number, name: string, desc:string, imagePath: string, videoPath: string) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.videoPath = videoPath;
  }
}