export interface IRpcService {
  launch(id: number): Promise<void>;
  stop(): void;
}
