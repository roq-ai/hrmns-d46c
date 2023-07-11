const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  recruiters: 'recruiter',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
