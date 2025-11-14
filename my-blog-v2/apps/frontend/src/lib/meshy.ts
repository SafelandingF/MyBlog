import type { infer as ZodInfer } from "zod";
import {
  createTextTo3DPreviewRequestSchema,
  createTextTo3DRefineRequestSchema,
  createTextTo3DResponseSchema,
  createImageTo3DRequestSchema,
  createImageTo3DResponseSchema,
  createRemeshRequestSchema,
  createRemeshResponseSchema,
  createRetextureRequestSchema,
  createRetextureResponseSchema,
} from "@my-blog-v2/shared/schemas";
import { postJson } from "./api";

export async function createTextTo3D(
  payload:
    | ZodInfer<typeof createTextTo3DPreviewRequestSchema>
    | ZodInfer<typeof createTextTo3DRefineRequestSchema>,
): Promise<ZodInfer<typeof createTextTo3DResponseSchema>> {
  return postJson<ZodInfer<typeof createTextTo3DResponseSchema>>(
    "/meshy/openapi/text-to-3d",
    payload,
  );
}

export async function createImageTo3D(
  payload: ZodInfer<typeof createImageTo3DRequestSchema>,
): Promise<ZodInfer<typeof createImageTo3DResponseSchema>> {
  return postJson<ZodInfer<typeof createImageTo3DResponseSchema>>(
    "/meshy/openapi/image-to-3d",
    payload,
  );
}

export async function createRemesh(
  payload: ZodInfer<typeof createRemeshRequestSchema>,
): Promise<ZodInfer<typeof createRemeshResponseSchema>> {
  return postJson<ZodInfer<typeof createRemeshResponseSchema>>(
    "/meshy/openapi/remesh",
    payload,
  );
}

export async function createRetexture(
  payload: ZodInfer<typeof createRetextureRequestSchema>,
): Promise<ZodInfer<typeof createRetextureResponseSchema>> {
  return postJson<ZodInfer<typeof createRetextureResponseSchema>>(
    "/meshy/openapi/retexture",
    payload,
  );
}

