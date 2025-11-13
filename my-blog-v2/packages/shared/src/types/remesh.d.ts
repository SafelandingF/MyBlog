/**
 * Meshy API 类型定义 - 重建网格（Remesh）
 * 参考文档：https://docs.meshy.ai/zh/api/remesh
 */

import type { Topology, ModelUrls, TaskError } from './shared';

/** 重建网格导出格式 */
export type ExportFormat = 'glb' | 'fbx' | 'obj' | 'usdz' | 'blend' | 'stl';

/** 原点位置 */
export type OriginAt = '' | 'bottom' | 'center';

/** 重建网格任务状态（与其它端点区分，避免 IN_PROGRESS/PROCESSING 混淆） */
export type RemeshTaskStatus = 'PENDING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED';

/**
 * 创建重建网格任务的请求参数
 */
export interface CreateRemeshRequest {
  /**
   * 需要重建网格的已完成任务 ID（文本/图像转3D、重新纹理）；与 model_url 二选一
   * 若两者同时提供，优先使用 input_task_id
   */
  input_task_id?: string;
  /**
   * 提供进行重建网格的 3D 模型 URL 或 Data URI（.glb/.gltf/.obj/.fbx/.stl）；与 input_task_id 二选一
   */
  model_url?: string;
  /** 重建网格目标格式列表，默认: ["glb"]。convert_format_only 为 true 时必填 */
  target_formats?: ExportFormat[];
  /** 拓扑结构，默认: triangle */
  topology?: Topology;
  /** 目标面数，范围: 100-300000，默认: 30000 */
  target_polycount?: number;
  /** 将模型缩放到指定高度（米），默认: 0 表示不缩放 */
  resize_height?: number;
  /** 原点位置，默认: ''（无影响） */
  origin_at?: OriginAt;
  /** 若为 true，仅进行格式转换，忽略其他属性。此时必须提供 target_formats */
  convert_format_only?: boolean;
}

/** 创建重建网格任务的响应 */
export interface CreateRemeshResponse {
  /** 新建任务的 id */
  result: string;
}

/** 重建网格任务对象 */
export interface RemeshTaskResponse {
  /** 任务唯一标识 */
  id: string;
  /** Meshy 生成的可下载模型文件 URL 集合 */
  model_urls?: ModelUrls;
  /** 任务进度，0-100 */
  progress: number;
  /** 任务状态（Remesh 专用，包含 PROCESSING） */
  status: RemeshTaskStatus;
  /** 前置任务数量，仅在 PENDING 时有意义 */
  preceding_tasks?: number;
  /** 任务创建时间戳（毫秒） */
  created_at: number;
  /** 任务开始时间戳（毫秒），未开始为 0 */
  started_at: number;
  /** 任务完成时间戳（毫秒），未完成为 0 */
  finished_at: number;
  /** 任务失败时的错误信息；成功时 message 为空 */
  task_error?: TaskError | null;
}


