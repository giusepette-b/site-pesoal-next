import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // Log para verificar se a rota está sendo chamada
    console.log('📍 Rota /api/contact POST chamada');
    
    const body = await request.json();
    console.log('📩 Dados recebidos:', body);

    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Resposta SIMPLES e garantida em JSON
    return new Response(JSON.stringify({
      success: true,
      message: 'Mensagem recebida com sucesso!',
      receivedAt: new Date().toISOString(),
      data: body
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('❌ Erro na API:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Erro interno do servidor',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Handler para métodos OPTIONS (CORS)
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Handler para métodos não permitidos
export async function GET() {
  return new Response(JSON.stringify({
    success: false,
    message: 'Método GET não permitido. Use POST.'
  }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}