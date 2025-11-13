import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('Meshy OpenAPI (e2e)', () => {
  let app: INestApplication<App>;
  const originalFetch = global.fetch;

  beforeAll(async () => {
    // 参考官方文档 base url: https://api.meshy.ai
    // Docs: https://docs.meshy.ai/en
    process.env.MESHY_BASE_URL = 'https://api.meshy.ai';
    process.env.MESHY_API_KEY = 'msy_dummy_api_key_for_test_mode_12345678';

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    // 每个用例前重置 fetch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('POST /meshy/openapi/text-to-3d (preview) should return task id', async () => {
    // mock Meshy createTextTo3D
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ result: 'task-text-001' }),
    });

    const res = await request(app.getHttpServer())
      .post('/meshy/openapi/text-to-3d')
      .send({
        mode: 'preview',
        prompt: 'a cute robot',
      })
      .expect(201); // Nest 默认 POST 201

    expect(res.body).toEqual({ result: 'task-text-001' });
  });

  it('GET /meshy/openapi/text-to-3d/:taskId should return task status', async () => {
    // mock Meshy getTextTo3DTask
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        id: 'task-text-001',
        progress: 42,
        started_at: Date.now(),
        created_at: Date.now(),
        finished_at: 0,
        status: 'IN_PROGRESS',
      }),
    });

    const res = await request(app.getHttpServer())
      .get('/meshy/openapi/text-to-3d/task-text-001')
      .expect(200);

    expect(res.body.id).toBe('task-text-001');
    expect(res.body.status).toBe('IN_PROGRESS');
  });

  it('POST /meshy/openapi/image-to-3d should return task id', async () => {
    // mock Meshy createImageTo3D
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ result: 'task-image-001' }),
    });

    const res = await request(app.getHttpServer())
      .post('/meshy/openapi/image-to-3d')
      .send({
        image_url: 'https://example.com/a.png',
      })
      .expect(201);

    expect(res.body).toEqual({ result: 'task-image-001' });
  });

  it('GET /meshy/openapi/image-to-3d/:taskId should return task status', async () => {
    // mock Meshy getImageTo3DTask
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        id: 'task-image-001',
        progress: 100,
        started_at: Date.now(),
        created_at: Date.now(),
        finished_at: Date.now(),
        status: 'SUCCEEDED',
      }),
    });

    const res = await request(app.getHttpServer())
      .get('/meshy/openapi/image-to-3d/task-image-001')
      .expect(200);

    expect(res.body.id).toBe('task-image-001');
    expect(res.body.status).toBe('SUCCEEDED');
  });

  it('POST /meshy/openapi/remesh should return task id', async () => {
    // mock Meshy createRemesh
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ result: 'task-remesh-001' }),
    });

    const res = await request(app.getHttpServer())
      .post('/meshy/openapi/remesh')
      .send({
        input_task_id: 'some-finished-task-id',
      })
      .expect(201);

    expect(res.body).toEqual({ result: 'task-remesh-001' });
  });

  it('GET /meshy/openapi/remesh/:taskId should return task status', async () => {
    // mock Meshy getRemeshTask
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        id: 'task-remesh-001',
        progress: 12,
        status: 'PROCESSING',
        preceding_tasks: 0,
        created_at: Date.now(),
        started_at: Date.now(),
        finished_at: 0,
        task_error: null,
      }),
    });

    const res = await request(app.getHttpServer())
      .get('/meshy/openapi/remesh/task-remesh-001')
      .expect(200);

    expect(res.body.id).toBe('task-remesh-001');
    expect(res.body.status).toBe('PROCESSING');
  });

  it('POST /meshy/openapi/retexture should return task id', async () => {
    // mock Meshy createRetexture
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ result: 'task-retexture-001' }),
    });

    const res = await request(app.getHttpServer())
      .post('/meshy/openapi/retexture')
      .send({
        input_task_id: 'some-finished-task-id',
      })
      .expect(201);

    expect(res.body).toEqual({ result: 'task-retexture-001' });
  });

  it('GET /meshy/openapi/retexture/:taskId should return task status', async () => {
    // mock Meshy getRetextureTask
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        id: 'task-retexture-001',
        text_style_prompt: 'wood',
        progress: 90,
        started_at: Date.now(),
        created_at: Date.now(),
        expires_at: Date.now() + 3600_000,
        finished_at: 0,
        status: 'IN_PROGRESS',
      }),
    });

    const res = await request(app.getHttpServer())
      .get('/meshy/openapi/retexture/task-retexture-001')
      .expect(200);

    expect(res.body.id).toBe('task-retexture-001');
    expect(res.body.status).toBe('IN_PROGRESS');
  });

  it('POST /meshy/openapi/text-to-3d with invalid body should 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/meshy/openapi/text-to-3d')
      .send({
        // 缺少 mode 字段，Zod discriminatedUnion 会报错
        prompt: 'missing mode',
      })
      .expect(400);

    expect(res.body.message).toBeDefined();
  });
});


