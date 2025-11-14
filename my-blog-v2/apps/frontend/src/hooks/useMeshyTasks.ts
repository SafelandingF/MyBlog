import { useQuery } from "@tanstack/react-query";
import type { infer as ZodInfer } from "zod";
import {
  textTo3DTaskResponseSchema,
  imageTo3DTaskResponseSchema,
  remeshTaskResponseSchema,
  retextureTaskResponseSchema,
} from "@my-blog-v2/shared/schemas";
import { getJson } from "../lib/api";

export function useTextTo3DStatus(taskId?: string) {
  return useQuery({
    queryKey: ["text-to-3d", taskId],
    queryFn: async () => {
      const data = await getJson<ZodInfer<typeof textTo3DTaskResponseSchema>>(
        `/meshy/openapi/text-to-3d/${taskId}`,
      );
      return data;
    },
    enabled: !!taskId,
    refetchInterval: (data) => {
      if (!data) return 2000;
      return ["SUCCEEDED", "FAILED", "CANCELED"].includes(data.status)
        ? false
        : 2000;
    },
  });
}

export function useImageTo3DStatus(taskId?: string) {
  return useQuery({
    queryKey: ["image-to-3d", taskId],
    queryFn: async () => {
      const data = await getJson<ZodInfer<typeof imageTo3DTaskResponseSchema>>(
        `/meshy/openapi/image-to-3d/${taskId}`,
      );
      return data;
    },
    enabled: !!taskId,
    refetchInterval: (data) => {
      if (!data) return 2000;
      return ["SUCCEEDED", "FAILED", "CANCELED"].includes(data.status)
        ? false
        : 2000;
    },
  });
}

export function useRemeshStatus(taskId?: string) {
  return useQuery({
    queryKey: ["remesh", taskId],
    queryFn: async () => {
      const data = await getJson<ZodInfer<typeof remeshTaskResponseSchema>>(
        `/meshy/openapi/remesh/${taskId}`,
      );
      return data;
    },
    enabled: !!taskId,
    refetchInterval: (data) => {
      if (!data) return 2000;
      const status = data.status;
      return ["SUCCEEDED", "FAILED"].includes(status) ? false : 2000;
    },
  });
}

export function useRetextureStatus(taskId?: string) {
  return useQuery({
    queryKey: ["retexture", taskId],
    queryFn: async () => {
      const data = await getJson<ZodInfer<typeof retextureTaskResponseSchema>>(
        `/meshy/openapi/retexture/${taskId}`,
      );
      return data;
    },
    enabled: !!taskId,
    refetchInterval: (data) => {
      if (!data) return 2000;
      return ["SUCCEEDED", "FAILED", "CANCELED"].includes(data.status)
        ? false
        : 2000;
    },
  });
}

