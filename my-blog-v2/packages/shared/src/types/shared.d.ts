/**
 * Meshy API - 共享类型定义
 */

export type AIModel = 'meshy-4' | 'meshy-5' | 'latest';
export type Topology = 'quad' | 'triangle';
export type SymmetryMode = 'off' | 'auto' | 'on';
export type TaskStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'SUCCEEDED'
  | 'FAILED'
  | 'CANCELED';

export interface ModelUrls {
  /** GLB 文件的可下载链接 */
  glb?: string;
  /** FBX 文件的可下载链接 */
  fbx?: string;
  /** USDZ 文件的可下载链接 */
  usdz?: string;
  /** OBJ 文件的可下载链接 */
  obj?: string;
  /** BLEND 文件的可下载链接 */
  blend?: string;
  /** STL 文件的可下载链接 */
  stl?: string;
  /** MTL 文件的可下载链接 */
  mtl?: string;
}

/**
 * 贴图 URL 对象
 */
export interface TextureUrl {
  /** 基础色贴图的可下载链接 */
  base_color: string;
  /** 金属度贴图的可下载链接（enable_pbr: false 时不返回） */
  metallic?: string;
  /** 法线贴图的可下载链接（enable_pbr: false 时不返回） */
  normal?: string;
  /** 粗糙度贴图的可下载链接（enable_pbr: false 时不返回） */
  roughness?: string;
}

/**
 * 任务错误信息
 */
export interface TaskError {
  /** 详细错误信息 */
  message: string;
}
