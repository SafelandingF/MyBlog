import { z } from "zod";
/**
 * URL 或 Data URI 验证器
 * 支持标准 URL 或 Data URI 格式（如 data:image/png;base64,...）
 */
const urlOrDataUriSchema = z.string().refine(
  (val) => {
    try {
      new URL(val);
      return true;
    } catch {
      // 检查是否为 Data URI 格式
      return (
        /^data:[\w\/\+]+;base64,/.test(val) ||
        /^data:[\w\/\+]+,[\w\/\+]+/.test(val)
      );
    }
  },
  { message: "必须是有效的 URL 或 Data URI" }
);

// ==================== Shared Schemas ====================

/**
 * AIModel 枚举
 */
export const aiModelSchema = z.enum(["meshy-4", "meshy-5", "latest"]);

/**
 * Topology 枚举
 */
export const topologySchema = z.enum(["quad", "triangle"]);

/**
 * SymmetryMode 枚举
 */
export const symmetryModeSchema = z.enum(["off", "auto", "on"]);

/**
 * TaskStatus 枚举
 */
export const taskStatusSchema = z.enum([
  "PENDING",
  "IN_PROGRESS",
  "SUCCEEDED",
  "FAILED",
  "CANCELED",
]);

/**
 * ModelUrls Schema
 */
export const modelUrlsSchema = z.object({
  glb: z.url().optional(),
  fbx: z.url().optional(),
  usdz: z.url().optional(),
  obj: z.url().optional(),
  blend: z.url().optional(),
  stl: z.url().optional(),
  mtl: z.url().optional(),
});

/**
 * TextureUrl Schema
 */
export const textureUrlSchema = z.object({
  base_color: z.url(),
  metallic: z.url().optional(),
  normal: z.url().optional(),
  roughness: z.url().optional(),
});

/**
 * TaskError Schema
 */
export const taskErrorSchema = z.object({
  message: z.string(),
});

// ==================== Text-to-3D Schemas ====================

/**
 * ArtStyle 枚举
 */
export const artStyleSchema = z.enum(["realistic", "sculpture"]);

/**
 * CreateTextTo3DPreviewRequest Schema
 */
export const createTextTo3DPreviewRequestSchema = z.object({
  mode: z.literal("preview"),
  prompt: z.string().max(600),
  art_style: artStyleSchema.optional(),
  seed: z.number().int().optional(),
  ai_model: aiModelSchema.optional(),
  should_remesh: z.boolean().optional(),
  topology: topologySchema.optional(),
  target_polycount: z.number().int().min(100).max(300000).optional(),
  symmetry_mode: symmetryModeSchema.optional(),
  is_a_t_pose: z.boolean().optional(),
  moderation: z.boolean().optional(),
});

/**
 * CreateTextTo3DRefineRequest Schema
 */
export const createTextTo3DRefineRequestSchema = z.object({
  mode: z.literal("refine"),
  preview_task_id: z.string(),
  enable_pbr: z.boolean().optional(),
  texture_prompt: z.string().max(600).optional(),
  texture_image_url: urlOrDataUriSchema.optional(),
  ai_model: aiModelSchema.optional(),
  moderation: z.boolean().optional(),
});

/**
 * CreateTextTo3DResponse Schema
 */
export const createTextTo3DResponseSchema = z.object({
  result: z.string(),
});

/**
 * TextTo3DTaskResponse Schema
 */
export const textTo3DTaskResponseSchema = z.object({
  id: z.string(),
  model_urls: modelUrlsSchema.optional(),
  prompt: z.string(),
  negative_prompt: z.string().optional(),
  art_style: z.string().optional(),
  texture_richness: z.string().optional(),
  texture_prompt: z.string().optional(),
  texture_image_url: z.url().optional(),
  thumbnail_url: z.url().optional(),
  video_url: z.url().optional(),
  progress: z.number().int().min(0).max(100),
  seed: z.number().int().optional(),
  started_at: z.number().int().nonnegative(),
  created_at: z.number().int().nonnegative(),
  finished_at: z.number().int().nonnegative(),
  status: taskStatusSchema,
  texture_urls: z.array(textureUrlSchema).optional(),
  preceding_tasks: z.number().int().nonnegative().optional(),
  task_error: taskErrorSchema.optional(),
});

// ==================== Image-to-3D Schemas ====================

/**
 * CreateImageTo3DRequest Schema
 */
export const createImageTo3DRequestSchema = z.object({
  image_url: urlOrDataUriSchema,
  ai_model: aiModelSchema.optional(),
  topology: topologySchema.optional(),
  target_polycount: z.number().int().min(100).max(300000).optional(),
  symmetry_mode: symmetryModeSchema.optional(),
  should_remesh: z.boolean().optional(),
  should_texture: z.boolean().optional(),
  enable_pbr: z.boolean().optional(),
  is_a_t_pose: z.boolean().optional(),
  texture_prompt: z.string().max(600).optional(),
  texture_image_url: urlOrDataUriSchema.optional(),
  moderation: z.boolean().optional(),
});

/**
 * CreateImageTo3DResponse Schema
 */
export const createImageTo3DResponseSchema = z.object({
  result: z.string(),
});

/**
 * ImageTo3DTaskResponse Schema
 */
export const imageTo3DTaskResponseSchema = z.object({
  id: z.string(),
  model_urls: modelUrlsSchema.optional(),
  thumbnail_url: z.url().optional(),
  texture_prompt: z.string().optional(),
  progress: z.number().int().min(0).max(100),
  started_at: z.number().int().nonnegative(),
  created_at: z.number().int().nonnegative(),
  finished_at: z.number().int().nonnegative(),
  expires_at: z.number().int().nonnegative().optional(),
  status: taskStatusSchema,
  texture_urls: z.array(textureUrlSchema).optional(),
  preceding_tasks: z.number().int().nonnegative().optional(),
  task_error: taskErrorSchema.optional(),
});

/**
 * MultiImageTo3DTaskResponse Schema
 */
export const multiImageTo3DTaskResponseSchema = z.object({
  id: z.string(),
  model_urls: modelUrlsSchema.optional(),
  thumbnail_url: z.url().optional(),
  texture_prompt: z.string().optional(),
  progress: z.number().int().min(0).max(100),
  started_at: z.number().int().nonnegative(),
  created_at: z.number().int().nonnegative(),
  expires_at: z.number().int().nonnegative().optional(),
  finished_at: z.number().int().nonnegative(),
  status: taskStatusSchema,
  texture_urls: z.array(textureUrlSchema).optional(),
  preceding_tasks: z.number().int().nonnegative().optional(),
  task_error: taskErrorSchema.optional(),
});

// ==================== Remesh Schemas ====================

/**
 * ExportFormat 枚举
 */
export const exportFormatSchema = z.enum([
  "glb",
  "fbx",
  "obj",
  "usdz",
  "blend",
  "stl",
]);

/**
 * OriginAt 枚举
 */
export const originAtSchema = z.enum(["", "bottom", "center"]);

/**
 * RemeshTaskStatus 枚举
 */
export const remeshTaskStatusSchema = z.enum([
  "PENDING",
  "PROCESSING",
  "SUCCEEDED",
  "FAILED",
]);

/**
 * CreateRemeshRequest Schema
 */
export const createRemeshRequestSchema = z.object({
  input_task_id: z.string().optional(),
  model_url: urlOrDataUriSchema.optional(),
  target_formats: z.array(exportFormatSchema).optional(),
  topology: topologySchema.optional(),
  target_polycount: z.number().int().min(100).max(300000).optional(),
  resize_height: z.number().nonnegative().optional(),
  origin_at: originAtSchema.optional(),
  convert_format_only: z.boolean().optional(),
});

/**
 * CreateRemeshResponse Schema
 */
export const createRemeshResponseSchema = z.object({
  result: z.string(),
});

/**
 * RemeshTaskResponse Schema
 */
export const remeshTaskResponseSchema = z.object({
  id: z.string(),
  model_urls: modelUrlsSchema.optional(),
  progress: z.number().int().min(0).max(100),
  status: remeshTaskStatusSchema,
  preceding_tasks: z.number().int().nonnegative().optional(),
  created_at: z.number().int().nonnegative(),
  started_at: z.number().int().nonnegative(),
  finished_at: z.number().int().nonnegative(),
  task_error: taskErrorSchema.nullable().optional(),
});

// ==================== Retexture Schemas ====================

/**
 * CreateRetextureRequest Schema
 */
export const createRetextureRequestSchema = z.object({
  input_task_id: z.string().optional(),
  model_url: urlOrDataUriSchema.optional(),
  text_style_prompt: z.string().max(600).optional(),
  image_style_url: urlOrDataUriSchema.optional(),
  ai_model: aiModelSchema.optional(),
  enable_original_uv: z.boolean().optional(),
  enable_pbr: z.boolean().optional(),
});

/**
 * CreateRetextureResponse Schema
 */
export const createRetextureResponseSchema = z.object({
  result: z.string(),
});

/**
 * RetextureTaskResponse Schema
 */
export const retextureTaskResponseSchema = z.object({
  id: z.string(),
  model_urls: modelUrlsSchema.optional(),
  text_style_prompt: z.string().optional(),
  image_style_url: z.url().optional(),
  thumbnail_url: z.url().optional(),
  progress: z.number().int().min(0).max(100),
  started_at: z.number().int().nonnegative(),
  created_at: z.number().int().nonnegative(),
  expires_at: z.number().int().nonnegative(),
  finished_at: z.number().int().nonnegative(),
  status: taskStatusSchema,
  texture_urls: z.array(textureUrlSchema).optional(),
  preceding_tasks: z.number().int().nonnegative().optional(),
  task_error: taskErrorSchema.optional(),
});
