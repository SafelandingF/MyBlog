/**
 * Meshy API 类型定义 - 重新纹理（Retexture）
 *
 * 参考文档：https://docs.meshy.ai/zh/api/retexture
 */

import type {
  AIModel,
  TaskStatus,
  ModelUrls,
  TextureUrl,
  TaskError,
} from './shared';

/**
 * 创建重新纹理任务的请求参数
 */
export interface CreateRetextureRequest {
  /**
   * 需要重新纹理的已完成任务 ID。
   * 任务必须是文本转3D预览/精化、图像转3D或重建网格，且状态为 SUCCEEDED，使用 meshy-4 或 meshy-5。
   * 与 model_url 二选一；若两者同时提供，优先使用 input_task_id。
   */
  input_task_id?: string;

  /**
   * 提供进行纹理处理的 3D 模型的 URL 或 Data URI（.glb/.gltf/.obj/.fbx/.stl）。
   * 与 input_task_id 二选一；未提供 input_task_id 时必填。
   */
  model_url?: string;

  /**
   * 文本风格提示，描述期望的物体纹理风格，最多 600 个字符。
   * 与 image_style_url 二选一；若同时提供，默认使用 image_style_url。
   */
  text_style_prompt?: string;

  /**
   * 图像风格 URL 或 Data URI（支持 .jpg/.jpeg/.png），用于引导纹理处理。
   * 与 text_style_prompt 二选一；若同时提供，默认使用 image_style_url。
   */
  image_style_url?: string;

  /**
   * 用于重新纹理的 AI 模型 ID，默认: latest。
   * 可选值：'latest' | 'meshy-4' | 'meshy-5'
   */
  ai_model?: AIModel;

  /**
   * 是否使用模型原始 UV（而不是生成新的 UV），默认: true。
   * 若模型没有原始 UV，输出质量可能不佳。
   */
  enable_original_uv?: boolean;

  /**
   * 是否生成 PBR 贴图（metallic/roughness/normal）以及基础色，默认: false。
   */
  enable_pbr?: boolean;
}

/**
 * 创建重新纹理任务的响应
 */
export interface CreateRetextureResponse {
  /** 新建任务的 id */
  result: string;
}

/**
 * 重新纹理任务对象
 */
export interface RetextureTaskResponse {
  /** 任务的唯一标识符 */
  id: string;

  /** Meshy 生成的可下载带纹理 3D 模型文件的 URL */
  model_urls?: ModelUrls;

  /** 创建任务时使用的文本风格提示 */
  text_style_prompt?: string;

  /** 创建任务时使用的图像风格 URL */
  image_style_url?: string;

  /** 模型文件缩略图的可下载 URL */
  thumbnail_url?: string;

  /** 任务进度，0 表示未开始，成功后为 100 */
  progress: number;

  /** 任务开始时间戳（毫秒），未开始为 0 */
  started_at: number;

  /** 任务创建时间戳（毫秒） */
  created_at: number;

  /** 任务结果过期时间戳（毫秒） */
  expires_at: number;

  /** 任务完成时间戳（毫秒），未完成为 0 */
  finished_at: number;

  /** 任务状态：PENDING / IN_PROGRESS / SUCCEEDED / FAILED / CANCELED */
  status: TaskStatus;

  /** 由任务生成的贴图 URL 对象数组（通常仅一个） */
  texture_urls?: TextureUrl[];

  /** 前置任务数量，仅在状态为 PENDING 时出现 */
  preceding_tasks?: number;

  /** 任务失败时的错误信息；成功时 message 为空字符串 */
  task_error?: TaskError;
}
