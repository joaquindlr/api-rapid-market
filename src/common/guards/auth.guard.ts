import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (token) {
      try {
        const decoded = this.jwtService.decode(token.replace('Bearer ', ''));
        request.user = decoded;
        return true;
      } catch (err) {
        return false;
      }
    }

    return false;
  }
}
