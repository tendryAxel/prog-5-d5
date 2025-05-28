import { existsSync, readFileSync, writeFileSync } from "fs";

export class Database<TData> {
  public data: TData;

  constructor(
    private readonly dbPath: string,
    initial: TData,
  ) {
    this.data = this.load(initial);
  }

  public update = (data: Partial<TData>) =>
    (this.data = { ...this.data, ...data });

  public commit = () => this.persist(this.data);

  private persist = (data: TData) =>
    writeFileSync(this.dbPath, JSON.stringify(data));

  private read = (): TData =>
    JSON.parse(readFileSync(this.dbPath).toString()) as TData;

  private load = (initial: TData): TData => {
    if (!existsSync(this.dbPath)) {
      this.persist(initial);
    }

    const current = this.read();

    return {
      ...initial,
      ...current,
    };
  };
}
