/**
 * Meshy API 类型定义
 */

import type {
  AIModel,
  Topology,
  SymmetryMode,
  TaskStatus,
  ModelUrls,
  TextureUrl,
  TaskError,
} from './shared';

export type ArtStyle = 'realistic' | 'sculpture';

export interface CreateTextTo3DPreviewRequest {
  /** 创建预览任务时，该字段应设置为 "preview" */
  mode: 'preview';
  /** 描述 3D 模型的物体类型，最大 600 个字符 */
  prompt: string;
  /** 艺术风格，默认: realistic。注意：雕塑风格会生成自带的 PBR 贴图 */
  art_style?: ArtStyle;
  /** 随机种子，相同 prompt 和 seed 通常生成相同结果 */
  seed?: number;
  /** AI 模型 ID，默认: latest */
  ai_model?: AIModel;
  /** 是否启用重建网格，默认: true。设为 false 可获得最高精度网格 */
  should_remesh?: boolean;
  /** 拓扑结构，默认: triangle */
  topology?: Topology;
  /** 目标面数，范围: 100-300000，默认: 30000 */
  target_polycount?: number;
  /** 对称模式，默认: auto */
  symmetry_mode?: SymmetryMode;
  /** 是否生成 A/T Pose 模型，默认: false */
  is_a_t_pose?: boolean;
  /** 是否启用内容筛查，默认: false */
  moderation?: boolean;
}

/**
 * 创建文本生成3D精细化任务的请求参数
 */
export interface CreateTextTo3DRefineRequest {
  /** 创建精细化任务时，该字段应设置为 "refine" */
  mode: 'refine';
  /** 对应的预览任务 id，状态必须为 SUCCEEDED */
  preview_task_id: string;
  /** 是否生成 PBR 贴图，默认: false。注意：雕塑风格时应设为 false */
  enable_pbr?: boolean;
  /** 贴图引导文本，最大 600 个字符。与 texture_image_url 二选一 */
  texture_prompt?: string;
  /** 贴图引导图片 URL（支持 .jpg、.jpeg、.png）或 Data URI，与 texture_prompt 二选一。需要 ai_model 为 meshy-4 */
  texture_image_url?: string;
  /** 用于优化的模型 ID，默认: latest。仅在预览任务使用 meshy-5 或 latest 时适用 */
  ai_model?: AIModel;
  /** 是否启用内容筛查，默认: false */
  moderation?: boolean;
}

/**
 * 创建文本生成3D任务的响应
 */
export interface CreateTextTo3DResponse {
  /** 新建任务的 id */
  result: string;
}

/** @deprecated 使用 CreateTextTo3DResponse 替代 */
export type CreateTextTo3DPreviewResponse = CreateTextTo3DResponse;

/**
 * 文本生成3D任务对象
 */
export interface TextTo3DTaskResponse {
  /** 任务的唯一标识符 */
  id: string;
  /** 带贴图 3D 模型文件的可下载链接 */
  model_urls?: ModelUrls;
  /** 创建任务时使用的原始 prompt */
  prompt: string;
  /** 为兼容性保留的废弃字段 */
  negative_prompt?: string;
  /** 创建预览任务时使用的原始 art_style */
  art_style?: string;
  /** 为兼容性保留的废弃字段 */
  texture_richness?: string;
  /** 精细化阶段用于引导贴图过程的额外文本提示 */
  texture_prompt?: string;
  /** 用于引导贴图过程的图片下载链接 */
  texture_image_url?: string;
  /** 模型文件缩略图的可下载链接 */
  thumbnail_url?: string;
  /** 预览视频的可下载链接 */
  video_url?: string;
  /** 任务进度，0-100 */
  progress: number;
  /** 任务的随机种子 */
  seed?: number;
  /** 任务开始时间的时间戳（毫秒），未开始为 0 */
  started_at: number;
  /** 任务创建时间的时间戳（毫秒） */
  created_at: number;
  /** 任务完成时间的时间戳（毫秒），未完成为 0 */
  finished_at: number;
  /** 任务状态 */
  status: TaskStatus;
  /** 任务生成的贴图 URL 对象数组 */
  texture_urls?: TextureUrl[];
  /** 前置任务数量，仅在状态为 PENDING 时有意义 */
  preceding_tasks?: number;
  /** 任务失败时的错误信息 */
  task_error?: TaskError;
}
