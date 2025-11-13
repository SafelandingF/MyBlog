import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import type { ZodError, ZodIssue } from 'zod';

type OutputOf<TSchema> = TSchema extends { _output: infer T } ? T : unknown;

@Injectable()
export class ZodValidationPipe<TSchema>
  implements PipeTransform<unknown, OutputOf<TSchema>>
{
  constructor(
    private readonly schema: {
      safeParse: (
        data: unknown,
      ) =>
        | { success: true; data: OutputOf<TSchema> }
        | { success: false; error: ZodError };
    },
  ) {}

  transform(value: unknown, _metadata: ArgumentMetadata): OutputOf<TSchema> {
    void _metadata;
    const result = this.schema.safeParse(value);
    if (!result.success) {
      const error = result.error;
      const firstIssue: ZodIssue | undefined = error.issues?.[0];
      const message = firstIssue?.message ?? 'Invalid request payload';
      throw new BadRequestException({
        message,
        issues: error.issues?.map((i: ZodIssue) => ({
          path: i.path?.join('.') ?? '',
          code: i.code,
          message: i.message,
        })),
      });
    }
    return result.data;
  }
}
