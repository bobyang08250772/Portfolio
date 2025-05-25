import {
    RouteReuseStrategy,
    DetachedRouteHandle,
    ActivatedRouteSnapshot
  } from '@angular/router';
  
  export class CustomReuseStrategy implements RouteReuseStrategy {
  
    // Store route handles
    private storedHandles = new Map<string, DetachedRouteHandle>();
  
    // Generate a consistent key for route
    private getRouteKey(route: ActivatedRouteSnapshot): string {
      const path = route.routeConfig?.path ?? '';
      const params = route.params ? JSON.stringify(route.params) : '';
      return `${path}?${params}`;
    }
  
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      // Do not detach the root (empty path)
      return !!route.routeConfig && route.routeConfig.path !== '';
    }
  
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
      const key = this.getRouteKey(route);
      this.storedHandles.set(key, handle);
    }
  
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
      const key = this.getRouteKey(route);
      return this.storedHandles.has(key);
    }
  
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
      const key = this.getRouteKey(route);
      return this.storedHandles.get(key) || null;
    }
  
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      return future.routeConfig === curr.routeConfig;
    }
  }