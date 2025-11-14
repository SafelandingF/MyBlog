"use client";
import { useState } from "react";
import {
  createTextTo3D,
  createImageTo3D,
  createRemesh,
  createRetexture,
} from "../lib/meshy";
import {
  useTextTo3DStatus,
  useImageTo3DStatus,
  useRemeshStatus,
  useRetextureStatus,
} from "../hooks/useMeshyTasks";

export default function Home() {
  const [textTo3DTaskId, setTextTo3DTaskId] = useState<string>("");
  const [imageTo3DTaskId, setImageTo3DTaskId] = useState<string>("");
  const [remeshTaskId, setRemeshTaskId] = useState<string>("");
  const [retextureTaskId, setRetextureTaskId] = useState<string>("");

  const [textTo3DPrompt, setTextTo3DPrompt] = useState("");
  const [imageTo3DUrl, setImageTo3DUrl] = useState("");
  const [remeshInput, setRemeshInput] = useState("");
  const [remeshIsTaskId, setRemeshIsTaskId] = useState(true);
  const [retextureInput, setRetextureInput] = useState("");
  const [retextureIsTaskId, setRetextureIsTaskId] = useState(true);

  const textTo3DStatus = useTextTo3DStatus(textTo3DTaskId);
  const imageTo3DStatus = useImageTo3DStatus(imageTo3DTaskId);
  const remeshStatus = useRemeshStatus(remeshTaskId);
  const retextureStatus = useRetextureStatus(retextureTaskId);

  const handleTextTo3DSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createTextTo3D({
        mode: "preview",
        prompt: textTo3DPrompt,
      });
      setTextTo3DTaskId(result.result);
    } catch (error) {
      console.error("Text-to-3D error:", error);
      alert(`错误: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleImageTo3DSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createImageTo3D({
        image_url: imageTo3DUrl,
      });
      setImageTo3DTaskId(result.result);
    } catch (error) {
      console.error("Image-to-3D error:", error);
      alert(`错误: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleRemeshSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = remeshIsTaskId
        ? { input_task_id: remeshInput }
        : { model_url: remeshInput };
      const result = await createRemesh(payload);
      setRemeshTaskId(result.result);
    } catch (error) {
      console.error("Remesh error:", error);
      alert(`错误: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleRetextureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = retextureIsTaskId
        ? { input_task_id: retextureInput }
        : { model_url: retextureInput };
      const result = await createRetexture(payload);
      setRetextureTaskId(result.result);
    } catch (error) {
      console.error("Retexture error:", error);
      alert(`错误: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">
          Meshy API 测试面板
        </h1>

        {/* Text-to-3D */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
            Text-to-3D
          </h2>
          <form onSubmit={handleTextTo3DSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-black dark:text-zinc-50">
                Prompt
              </label>
              <input
                type="text"
                value={textTo3DPrompt}
                onChange={(e) => setTextTo3DPrompt(e.target.value)}
                className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-zinc-50"
                placeholder="输入描述..."
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              创建任务
            </button>
          </form>
          {textTo3DTaskId && (
            <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                任务 ID: {textTo3DTaskId}
              </p>
              {textTo3DStatus.isLoading && (
                <p className="text-sm text-blue-600">加载中...</p>
              )}
              {textTo3DStatus.data && (
                <div className="mt-2 space-y-2">
                  <p className="text-sm">
                    状态:{" "}
                    <span className="font-medium">
                      {textTo3DStatus.data.status}
                    </span>
                  </p>
                  <p className="text-sm">
                    进度: {textTo3DStatus.data.progress}%
                  </p>
                  {textTo3DStatus.data.model_urls && (
                    <div className="mt-2">
                      <p className="text-sm font-medium mb-1">模型链接:</p>
                      <div className="space-y-1">
                        {textTo3DStatus.data.model_urls.glb && (
                          <a
                            href={textTo3DStatus.data.model_urls.glb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            GLB
                          </a>
                        )}
                        {textTo3DStatus.data.model_urls.fbx && (
                          <a
                            href={textTo3DStatus.data.model_urls.fbx}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            FBX
                          </a>
                        )}
                        {textTo3DStatus.data.model_urls.usdz && (
                          <a
                            href={textTo3DStatus.data.model_urls.usdz}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            USDZ
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {textTo3DStatus.error && (
                <p className="text-sm text-red-600 mt-2">
                  错误: {textTo3DStatus.error.message}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Image-to-3D */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
            Image-to-3D
          </h2>
          <form onSubmit={handleImageTo3DSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-black dark:text-zinc-50">
                Image URL
              </label>
              <input
                type="url"
                value={imageTo3DUrl}
                onChange={(e) => setImageTo3DUrl(e.target.value)}
                className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-zinc-50"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              创建任务
            </button>
          </form>
          {imageTo3DTaskId && (
            <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                任务 ID: {imageTo3DTaskId}
              </p>
              {imageTo3DStatus.isLoading && (
                <p className="text-sm text-blue-600">加载中...</p>
              )}
              {imageTo3DStatus.data && (
                <div className="mt-2 space-y-2">
                  <p className="text-sm">
                    状态:{" "}
                    <span className="font-medium">
                      {imageTo3DStatus.data.status}
                    </span>
                  </p>
                  <p className="text-sm">
                    进度: {imageTo3DStatus.data.progress}%
                  </p>
                  {imageTo3DStatus.data.model_urls && (
                    <div className="mt-2">
                      <p className="text-sm font-medium mb-1">模型链接:</p>
                      <div className="space-y-1">
                        {imageTo3DStatus.data.model_urls.glb && (
                          <a
                            href={imageTo3DStatus.data.model_urls.glb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            GLB
                          </a>
                        )}
                        {imageTo3DStatus.data.model_urls.fbx && (
                          <a
                            href={imageTo3DStatus.data.model_urls.fbx}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            FBX
                          </a>
                        )}
                        {imageTo3DStatus.data.model_urls.usdz && (
                          <a
                            href={imageTo3DStatus.data.model_urls.usdz}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            USDZ
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {imageTo3DStatus.error && (
                <p className="text-sm text-red-600 mt-2">
                  错误: {imageTo3DStatus.error.message}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Remesh */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
            Remesh
          </h2>
          <form onSubmit={handleRemeshSubmit} className="space-y-4">
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 text-black dark:text-zinc-50">
                <input
                  type="radio"
                  checked={remeshIsTaskId}
                  onChange={() => setRemeshIsTaskId(true)}
                />
                使用 Task ID
              </label>
              <label className="flex items-center gap-2 text-black dark:text-zinc-50">
                <input
                  type="radio"
                  checked={!remeshIsTaskId}
                  onChange={() => setRemeshIsTaskId(false)}
                />
                使用 Model URL
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black dark:text-zinc-50">
                {remeshIsTaskId ? "Task ID" : "Model URL"}
              </label>
              <input
                type="text"
                value={remeshInput}
                onChange={(e) => setRemeshInput(e.target.value)}
                className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-zinc-50"
                placeholder={remeshIsTaskId ? "输入任务 ID" : "输入模型 URL"}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              创建任务
            </button>
          </form>
          {remeshTaskId && (
            <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                任务 ID: {remeshTaskId}
              </p>
              {remeshStatus.isLoading && (
                <p className="text-sm text-blue-600">加载中...</p>
              )}
              {remeshStatus.data && (
                <div className="mt-2 space-y-2">
                  <p className="text-sm">
                    状态:{" "}
                    <span className="font-medium">
                      {remeshStatus.data.status}
                    </span>
                  </p>
                  <p className="text-sm">进度: {remeshStatus.data.progress}%</p>
                  {remeshStatus.data.model_urls && (
                    <div className="mt-2">
                      <p className="text-sm font-medium mb-1">模型链接:</p>
                      <div className="space-y-1">
                        {remeshStatus.data.model_urls.glb && (
                          <a
                            href={remeshStatus.data.model_urls.glb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            GLB
                          </a>
                        )}
                        {remeshStatus.data.model_urls.fbx && (
                          <a
                            href={remeshStatus.data.model_urls.fbx}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            FBX
                          </a>
                        )}
                        {remeshStatus.data.model_urls.usdz && (
                          <a
                            href={remeshStatus.data.model_urls.usdz}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            USDZ
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {remeshStatus.error && (
                <p className="text-sm text-red-600 mt-2">
                  错误: {remeshStatus.error.message}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Retexture */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
            Retexture
          </h2>
          <form onSubmit={handleRetextureSubmit} className="space-y-4">
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 text-black dark:text-zinc-50">
                <input
                  type="radio"
                  checked={retextureIsTaskId}
                  onChange={() => setRetextureIsTaskId(true)}
                />
                使用 Task ID
              </label>
              <label className="flex items-center gap-2 text-black dark:text-zinc-50">
                <input
                  type="radio"
                  checked={!retextureIsTaskId}
                  onChange={() => setRetextureIsTaskId(false)}
                />
                使用 Model URL
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black dark:text-zinc-50">
                {retextureIsTaskId ? "Task ID" : "Model URL"}
              </label>
              <input
                type="text"
                value={retextureInput}
                onChange={(e) => setRetextureInput(e.target.value)}
                className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-zinc-50"
                placeholder={retextureIsTaskId ? "输入任务 ID" : "输入模型 URL"}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              创建任务
            </button>
          </form>
          {retextureTaskId && (
            <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                任务 ID: {retextureTaskId}
              </p>
              {retextureStatus.isLoading && (
                <p className="text-sm text-blue-600">加载中...</p>
              )}
              {retextureStatus.data && (
                <div className="mt-2 space-y-2">
                  <p className="text-sm">
                    状态:{" "}
                    <span className="font-medium">
                      {retextureStatus.data.status}
                    </span>
                  </p>
                  <p className="text-sm">
                    进度: {retextureStatus.data.progress}%
                  </p>
                  {retextureStatus.data.model_urls && (
                    <div className="mt-2">
                      <p className="text-sm font-medium mb-1">模型链接:</p>
                      <div className="space-y-1">
                        {retextureStatus.data.model_urls.glb && (
                          <a
                            href={retextureStatus.data.model_urls.glb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            GLB
                          </a>
                        )}
                        {retextureStatus.data.model_urls.fbx && (
                          <a
                            href={retextureStatus.data.model_urls.fbx}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            FBX
                          </a>
                        )}
                        {retextureStatus.data.model_urls.usdz && (
                          <a
                            href={retextureStatus.data.model_urls.usdz}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm block"
                          >
                            USDZ
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {retextureStatus.error && (
                <p className="text-sm text-red-600 mt-2">
                  错误: {retextureStatus.error.message}
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
