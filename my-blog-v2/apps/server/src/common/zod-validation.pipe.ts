import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import type { ZodSchema, ZodError } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema<any>) {}

  transform(value: unknown, _metadata: ArgumentMetadata) {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      const error: ZodError = result.error;
      const firstIssue = error.issues?.[0];
      const message =
        firstIssue?.message ??
        'Invalid request payload';
      throw new BadRequestException({
        message,
        issues: error.issues?.map(i => ({
          path: i.path?.join('.') ?? '',
          code: i.code,
          message: i.message,
        })),
      });
    }
    return result.data;
  }
}


