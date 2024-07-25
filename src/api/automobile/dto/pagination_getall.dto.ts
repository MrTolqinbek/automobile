export class PaginationGetAllDto<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  next: number | null;
  prev: number | null;

  constructor(items: T[], total: number, page: number, limit: number) {
    this.items = items;
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.totalPages = Math.ceil(total / limit);
    this.next = page < this.totalPages ? page + 1 : null;
    this.prev = page > 1 ? page - 1 : null;
  }
}
