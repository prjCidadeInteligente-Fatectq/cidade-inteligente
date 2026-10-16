import { Complaint } from '@core/models';

export const complaints: Complaint[] = [
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3301',
    problem: 'Buraco no asfalto',
    date: '2026-01-15T08:30:00Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Avenida Paulista',
    description: 'Buraco grande na Avenida Paulista, próximo ao MASP, causando danos aos veículos',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(11) 98765-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3302',
    problem: 'Iluminação pública',
    date: '2026-01-16T14:22:00Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Rua Augusta',
    description: 'Lâmpada queimada na Rua Augusta, trecho entre Alameda Santos e Haddock Lobo',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(11) 98765-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3303',
    problem: 'Vazamento de água',
    date: '2026-01-17T09:45:00Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Rua da Consolação',
    description: 'Vazamento de água na Rua da Consolação, altura do número 1200',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(11) 98765-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3304',
    problem: 'Acúmulo de lixo',
    date: '2026-01-18T16:10:00Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Praça Roosevelt',
    description: 'Acúmulo de lixo na Praça Roosevelt, atraindo animais e insetos',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(11) 98765-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3305',
    problem: 'Semáforo com defeito',
    date: '2026-01-19T11:55:00Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Rua Oscar Freire',
    description: 'Semáforo defeituoso no cruzamento da Rua Oscar Freire com Haddock Lobo',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(11) 98765-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3306',
    problem: 'Calçada danificada',
    date: '2026-01-20T07:30:00Z',
    latitude: -23.5392,
    longitude: -46.6563,
    street: 'Rua Vergueiro',
    description: 'Calçada quebrada na Rua Vergueiro, próximo ao Metrô Paraíso, risco de queda',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(11) 98765-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3307',
    problem: 'Sinalização viária',
    date: '2026-01-21T13:40:00Z',
    latitude: -23.5587,
    longitude: -46.6312,
    street: 'Rua Líbero Badaró',
    description: 'Falta de sinalização vertical na Rua Líbero Badaró, centro histórico',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(11) 98765-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3308',
    problem: 'Esgoto a céu aberto',
    date: '2026-01-22T10:15:00Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Rua Cardeal Arcoverde',
    description: 'Esgoto a céu aberto na Rua Cardeal Arcoverde, forte odor',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(11) 98765-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3309',
    problem: 'Árvore caída',
    date: '2026-01-23T15:20:00Z',
    latitude: -23.5445,
    longitude: -46.6642,
    street: 'Rua Haddock Lobo',
    description: 'Árvore caída bloqueando a Rua Haddock Lobo após temporal',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(11) 98765-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3310',
    problem: 'Buraco na ciclofaixa',
    date: '2026-01-24T08:00:00Z',
    latitude: -23.5629,
    longitude: -46.6544,
    street: 'Avenida Brigadeiro Faria Lima',
    description: 'Buraco na ciclofaixa da Avenida Faria Lima, próximo ao Shopping Iguatemi',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(11) 98765-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3311',
    problem: 'Pichação',
    date: '2026-01-25T12:30:00Z',
    latitude: -23.5512,
    longitude: -46.6289,
    street: 'Praça Ramos de Azevedo',
    description: 'Pichação no muro do Theatro Municipal, patrimônio histórico',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(11) 98765-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3312',
    problem: 'Iluminação pública',
    date: '2026-01-26T17:45:00Z',
    latitude: -23.5684,
    longitude: -46.6872,
    street: 'Praça do Pôr do Sol',
    description: 'Falta de iluminação na Praça do Pôr do Sol, insegurança noturna',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(11) 98765-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3313',
    problem: 'Vazamento de gás',
    date: '2026-01-27T09:10:00Z',
    latitude: -23.5421,
    longitude: -46.6378,
    street: 'Rua 25 de Março',
    description: 'Vazamento de gás na Rua 25 de Março, cheiro forte, risco de explosão',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(11) 98765-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3314',
    problem: 'Lixeira transbordando',
    date: '2026-01-28T14:00:00Z',
    latitude: -23.5789,
    longitude: -46.6621,
    street: 'Avenida Brigadeiro Faria Lima',
    description: 'Lixeira transbordando na Avenida Brigadeiro Faria Lima, próximo ao metrô',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(11) 98765-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3315',
    problem: 'Faixa de pedestres apagada',
    date: '2026-01-29T11:25:00Z',
    latitude: -23.5567,
    longitude: -46.6498,
    street: 'Avenida Rebouças',
    description: 'Faixa de pedestres apagada na Avenida Rebouças, esquina com Rua Teodoro Sampaio',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(11) 98765-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3316',
    problem: 'Ponto de ônibus danificado',
    date: '2026-01-30T16:50:00Z',
    latitude: -23.5345,
    longitude: -46.6421,
    street: 'Avenida Brigadeiro Luís Antônio',
    description: 'Ponto de ônibus destruído na Avenida Brigadeiro Luís Antônio, sem cobertura',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(11) 98765-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3317',
    problem: 'Infiltração',
    date: '2026-01-31T08:40:00Z',
    latitude: -23.5812,
    longitude: -46.6754,
    street: 'Rua Fradique Coutinho',
    description: 'Infiltração no teto da estação de metrô Fradique Coutinho',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(11) 98765-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3318',
    problem: 'Rachadura no asfalto',
    date: '2026-02-01T10:30:00Z',
    latitude: -23.5487,
    longitude: -46.6356,
    street: 'Rua Direita',
    description: 'Rachadura no asfalto da Rua Direita, centro histórico, risco estrutural',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(11) 98765-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3319',
    problem: 'Fiação exposta',
    date: '2026-02-02T13:15:00Z',
    latitude: -23.5698,
    longitude: -46.6598,
    street: 'Rua Oscar Freire',
    description: 'Fiação exposta na Rua Oscar Freire, perigo para pedestres e ciclistas',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(11) 98765-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3320',
    problem: 'Bueiro aberto',
    date: '2026-02-03T09:00:00Z',
    latitude: -23.5534,
    longitude: -46.6401,
    street: 'Avenida Ipiranga',
    description: 'Bueiro aberto na Avenida Ipiranga, esquina com São Luís, risco de acidente',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(11) 98765-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3321',
    problem: 'Rachadura no asfalto',
    date: '2026-02-04T14:20:00Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Avenida Paulista',
    description: 'Nova rachadura no asfalto da Avenida Paulista, sentido Paraíso',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(11) 98765-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3322',
    problem: 'Iluminação pública',
    date: '2026-02-05T09:15:00Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Rua Augusta',
    description: 'Mais uma lâmpada queimada na Rua Augusta, agora próximo à Alameda Jaú',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(11) 98765-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3323',
    problem: 'Vazamento de água',
    date: '2026-02-06T11:30:00Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Rua da Consolação',
    description: 'Vazamento de água na Rua da Consolação aumentou, alagando calçada',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(11) 98765-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3324',
    problem: 'Acúmulo de lixo',
    date: '2026-02-07T16:45:00Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Praça Roosevelt',
    description: 'Lixo acumulado na Praça Roosevelt volta a aparecer após coleta',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(11) 98765-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3325',
    problem: 'Semáforo com defeito',
    date: '2026-02-08T08:00:00Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Rua Oscar Freire',
    description: 'Semáforo da Oscar Freire com Haddock Lobo piscando em amarelo',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(11) 98765-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3326',
    problem: 'Esgoto a céu aberto',
    date: '2026-02-09T13:25:00Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Rua Cardeal Arcoverde',
    description: 'Esgoto na Cardeal Arcoverde transbordou após chuva forte',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(11) 98765-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3327',
    problem: 'Iluminação pública',
    date: '2026-02-10T10:10:00Z',
    latitude: -23.5684,
    longitude: -46.6872,
    street: 'Praça do Pôr do Sol',
    description: 'Iluminação da Praça do Pôr do Sol ainda insuficiente nas laterais',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(11) 98765-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3328',
    problem: 'Faixa de pedestres apagada',
    date: '2026-02-11T15:00:00Z',
    latitude: -23.5567,
    longitude: -46.6498,
    street: 'Avenida Rebouças',
    description: 'Faixa de pedestres da Rebouças desgastada, mal visível à noite',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(11) 98765-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3329',
    problem: 'Ponto de ônibus danificado',
    date: '2026-02-12T07:55:00Z',
    latitude: -23.5345,
    longitude: -46.6421,
    street: 'Avenida Brigadeiro Luís Antônio',
    description: 'Ponto de ônibus da Luís Antônio vandalizado novamente',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(11) 98765-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagePath: '/buraco.jpg'
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3330',
    problem: 'Bueiro aberto',
    date: '2026-02-13T12:40:00Z',
    latitude: -23.5534,
    longitude: -46.6401,
    street: 'Avenida Ipiranga',
    description: 'Bueiro da Ipiranga com São Luís fez barulho estranho ao passar carro',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(11) 98765-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagePath: '/buraco.jpg'
  }
];