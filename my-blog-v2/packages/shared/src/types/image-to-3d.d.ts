/**
 * Meshy 图像转3D API 类型定义
 * 文档: https://docs.meshy.ai/zh/api/image-to-3d
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

/**
 * 创建图像转3D任务的请求参数
 */
export interface CreateImageTo3DRequest {
  /**
   * 输入图片的 URL 或 Data URI
   * 支持 .jpg/.jpeg/.png，Data URI 形如 data:image/png;base64,<...>
   */
  image_url: string;
  /** 使用的模型 ID，默认: latest */
  ai_model?: AIModel;
  /** 拓扑结构，默认: triangle */
  topology?: Topology;
  /** 目标面数，范围: 100-300000，默认: 30000 */
  target_polycount?: number;
  /** 对称模式，默认: auto */
  symmetry_mode?: SymmetryMode;
  /**
   * 是否启用重建网格阶段，默认: true
   * 设为 false 时将直接返回三角网格，忽略 topology 与 target_polycount
   */
  should_remesh?: boolean;
  /**
   * 是否生成贴图，默认: true
   * 设为 false 时仅生成网格
   */
  should_texture?: boolean;
  /** 是否生成 PBR 贴图（金属、粗糙、法线），默认: false */
  enable_pbr?: boolean;
  /** 是否生成 A/T Pose 模型，默认: false */
  is_a_t_pose?: boolean;
  /**
   * 文本贴图提示，最多 600 字符
   * 与 texture_image_url 二选一；若两者均提供，优先使用该字段
   */
  texture_prompt?: string;
  /**
   * 图片贴图引导 URL 或 Data URI（仅 ai_model=meshy-4 支持）
   * 与 texture_prompt 二选一
   */
  texture_image_url?: string;
  /** 是否启用内容安全审核，默认: false */
  moderation?: boolean;
}

/**
 * 创建图像转3D任务的响应
 */
export interface CreateImageTo3DResponse {
  /** 新建任务的 id */
  result: string;
}

/**
 * 图像转3D任务对象
 */
export interface ImageTo3DTaskResponse {
  /** 任务唯一标识 */
  id: string;
  /** 带纹理 3D 模型文件的可下载链接 */
  model_urls?: ModelUrls;
  /** 模型预览缩略图 URL */
  thumbnail_url?: string;
  /** 用于引导贴图的文本提示 */
  texture_prompt?: string;
  /** 任务进度，0-100 */
  progress: number;
  /** 任务开始时间戳（毫秒），未开始为 0 */
  started_at: number;
  /** 任务创建时间戳（毫秒） */
  created_at: number;
  /** 任务完成时间戳（毫秒），未完成为 0 */
  finished_at: number;
  /** 结果过期时间戳（毫秒），可选 */
  expires_at?: number;
  /** 任务状态 */
  status: TaskStatus;
  /** 任务生成的贴图 URL 对象数组，通常仅一个 */
  texture_urls?: TextureUrl[];
  /** 当前排队的前置任务数量，仅在 PENDING 时有意义 */
  preceding_tasks?: number;
  /** 任务失败时的错误信息 */
  task_error?: TaskError;
}
/**
 * 多图像转3D任务对象
 * 用于从 1-4 张同一物体的图片生成 3D 模型
 */
export interface MultiImageTo3DTaskResponse {
  /** 任务唯一标识 */
  id: string;
  /** 带纹理 3D 模型文件的可下载链接 */
  model_urls?: ModelUrls;
  /** 模型预览缩略图 URL */
  thumbnail_url?: string;
  /** 用于引导贴图的文本提示 */
  texture_prompt?: string;
  /** 任务进度，0-100 */
  progress: number;
  /** 任务开始时间戳（毫秒），未开始为 0 */
  started_at: number;
  /** 任务创建时间戳（毫秒） */
  created_at: number;
  /** 结果过期时间戳（毫秒） */
  expires_at?: number;
  /** 任务完成时间戳（毫秒），未完成为 0 */
  finished_at: number;
  /** 任务状态 */
  status: TaskStatus;
  /** 任务生成的贴图 URL 对象数组，通常仅一个 */
  texture_urls?: TextureUrl[];
  /** 当前排队的前置任务数量，仅在 PENDING 时有意义 */
  preceding_tasks?: number;
  /** 任务失败时的错误信息 */
  task_error?: TaskError;
}
