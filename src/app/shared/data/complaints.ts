import { Complaint } from '@core/models';

export const complaints: Complaint[] = [
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3301',
    problem: 'Buraco no asfalto',
    registerDate: '2026-10-01T00:00:00Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3302',
    problem: 'Iluminação pública',
    registerDate: '2026-10-02T07:13:17Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3303',
    problem: 'Vazamento de água',
    registerDate: '2026-10-03T14:26:34Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3304',
    problem: 'Acúmulo de lixo',
    registerDate: '2026-10-04T21:39:51Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3305',
    problem: 'Semáforo com defeito',
    registerDate: '2026-10-05T04:52:08Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3306',
    problem: 'Calçada danificada',
    registerDate: '2026-10-06T11:05:25Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3307',
    problem: 'Sinalização viária',
    registerDate: '2026-10-07T18:18:42Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3308',
    problem: 'Esgoto a céu aberto',
    registerDate: '2026-10-08T01:31:59Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3309',
    problem: 'Árvore caída',
    registerDate: '2026-10-09T08:44:16Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3310',
    problem: 'Buraco na ciclofaixa',
    registerDate: '2026-10-10T15:57:33Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3311',
    problem: 'Pichação',
    registerDate: '2026-10-11T22:10:50Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3312',
    problem: 'Iluminação pública',
    registerDate: '2026-10-12T05:23:07Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3313',
    problem: 'Vazamento de gás',
    registerDate: '2026-10-13T12:36:24Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3314',
    problem: 'Lixeira transbordando',
    registerDate: '2026-10-14T19:49:41Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3315',
    problem: 'Faixa de pedestres apagada',
    registerDate: '2026-10-15T02:02:58Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3316',
    problem: 'Ponto de ônibus danificado',
    registerDate: '2026-10-16T09:15:15Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3317',
    problem: 'Infiltração',
    registerDate: '2026-10-17T16:28:32Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3318',
    problem: 'Rachadura no asfalto',
    registerDate: '2026-10-18T23:41:49Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3319',
    problem: 'Fiação exposta',
    registerDate: '2026-10-19T06:54:06Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3320',
    problem: 'Bueiro aberto',
    registerDate: '2026-10-20T13:07:23Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3321',
    problem: 'Rachadura no asfalto',
    registerDate: '2026-10-21T20:20:40Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3322',
    problem: 'Iluminação pública',
    registerDate: '2026-10-22T03:33:57Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3323',
    problem: 'Vazamento de água',
    registerDate: '2026-10-23T10:46:14Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3324',
    problem: 'Acúmulo de lixo',
    registerDate: '2026-10-24T17:59:31Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3325',
    problem: 'Semáforo com defeito',
    registerDate: '2026-10-25T00:12:48Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3326',
    problem: 'Esgoto a céu aberto',
    registerDate: '2026-10-26T07:25:05Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3327',
    problem: 'Iluminação pública',
    registerDate: '2026-10-27T14:38:22Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3328',
    problem: 'Faixa de pedestres apagada',
    registerDate: '2026-10-28T21:51:39Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3329',
    problem: 'Ponto de ônibus danificado',
    registerDate: '2026-10-29T04:04:56Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3330',
    problem: 'Bueiro aberto',
    registerDate: '2026-10-30T11:17:13Z',
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
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3400',
    problem: 'Buraco no asfalto',
    registerDate: '2026-10-05T05:35:55Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Avenida Paulista',
    description: 'Buraco no asfalto na Avenida Paulista (registro 31)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(11) 98765-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3401',
    problem: 'Iluminação pública',
    registerDate: '2026-10-06T12:48:12Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Rua Vergueiro',
    description: 'Iluminação pública na Rua Vergueiro (registro 32)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(11) 98765-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3402',
    problem: 'Vazamento de água',
    registerDate: '2026-10-07T19:01:29Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Praça Ramos de Azevedo',
    description: 'Vazamento de água na Praça Ramos de Azevedo (registro 33)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(11) 98765-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3403',
    problem: 'Acúmulo de lixo',
    registerDate: '2026-10-08T02:14:46Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Rua Fradique Coutinho',
    description: 'Acúmulo de lixo na Rua Fradique Coutinho (registro 34)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(11) 98765-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3404',
    problem: 'Semáforo com defeito',
    registerDate: '2026-10-09T09:27:03Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Rua da Consolação',
    description: 'Semáforo com defeito na Rua da Consolação (registro 35)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(11) 98765-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3405',
    problem: 'Calçada danificada',
    registerDate: '2026-10-10T16:40:20Z',
    latitude: -23.5392,
    longitude: -46.6563,
    street: 'Rua Cardeal Arcoverde',
    description: 'Calçada danificada na Rua Cardeal Arcoverde (registro 36)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(11) 98765-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3406',
    problem: 'Sinalização viária',
    registerDate: '2026-10-11T23:53:37Z',
    latitude: -23.5587,
    longitude: -46.6312,
    street: 'Rua 25 de Março',
    description: 'Sinalização viária na Rua 25 de Março (registro 37)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(11) 98765-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3407',
    problem: 'Esgoto a céu aberto',
    registerDate: '2026-10-12T06:06:54Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Avenida Ipiranga',
    description: 'Esgoto a céu aberto na Avenida Ipiranga (registro 38)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(11) 98765-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3408',
    problem: 'Árvore caída',
    registerDate: '2026-10-13T13:19:11Z',
    latitude: -23.5445,
    longitude: -46.6642,
    street: 'Rua Oscar Freire',
    description: 'Árvore caída na Rua Oscar Freire (registro 39)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(11) 98765-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3409',
    problem: 'Buraco na ciclofaixa',
    registerDate: '2026-10-14T20:32:28Z',
    latitude: -23.5629,
    longitude: -46.6544,
    street: 'Avenida Brigadeiro Faria Lima',
    description: 'Buraco na ciclofaixa na Avenida Brigadeiro Faria Lima (registro 40)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(11) 98765-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c340A',
    problem: 'Pichação',
    registerDate: '2026-10-15T03:45:45Z',
    latitude: -23.5512,
    longitude: -46.6289,
    street: 'Avenida Brigadeiro Luís Antônio',
    description: 'Pichação na Avenida Brigadeiro Luís Antônio (registro 41)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(11) 98765-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c340B',
    problem: 'Vazamento de gás',
    registerDate: '2026-10-16T10:58:02Z',
    latitude: -23.5684,
    longitude: -46.6872,
    street: 'Rua Augusta',
    description: 'Vazamento de gás na Rua Augusta (registro 42)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(11) 98765-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c340C',
    problem: 'Lixeira transbordando',
    registerDate: '2026-10-17T17:11:19Z',
    latitude: -23.5421,
    longitude: -46.6378,
    street: 'Rua Líbero Badaró',
    description: 'Lixeira transbordando na Rua Líbero Badaró (registro 43)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(11) 98765-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c340D',
    problem: 'Faixa de pedestres apagada',
    registerDate: '2026-10-18T00:24:36Z',
    latitude: -23.5789,
    longitude: -46.6621,
    street: 'Praça do Pôr do Sol',
    description: 'Faixa de pedestres apagada na Praça do Pôr do Sol (registro 44)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(11) 98765-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c340E',
    problem: 'Ponto de ônibus danificado',
    registerDate: '2026-10-19T07:37:53Z',
    latitude: -23.5567,
    longitude: -46.6498,
    street: 'Rua Direita',
    description: 'Ponto de ônibus danificado na Rua Direita (registro 45)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(11) 98765-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c340F',
    problem: 'Infiltração',
    registerDate: '2026-10-20T14:50:10Z',
    latitude: -23.5345,
    longitude: -46.6421,
    street: 'Praça Roosevelt',
    description: 'Infiltração na Praça Roosevelt (registro 46)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(11) 98765-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3410',
    problem: 'Rachadura no asfalto',
    registerDate: '2026-10-21T21:03:27Z',
    latitude: -23.5812,
    longitude: -46.6754,
    street: 'Rua Haddock Lobo',
    description: 'Rachadura no asfalto na Rua Haddock Lobo (registro 47)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(11) 98765-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3411',
    problem: 'Fiação exposta',
    registerDate: '2026-10-22T04:16:44Z',
    latitude: -23.5487,
    longitude: -46.6356,
    street: 'Avenida Rebouças',
    description: 'Fiação exposta na Avenida Rebouças (registro 48)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(11) 98765-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3412',
    problem: 'Bueiro aberto',
    registerDate: '2026-10-23T11:29:01Z',
    latitude: -23.5698,
    longitude: -46.6598,
    street: 'Avenida Paulista',
    description: 'Bueiro aberto na Avenida Paulista (registro 49)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(11) 98765-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3413',
    problem: 'Buraco no asfalto',
    registerDate: '2026-10-24T18:42:18Z',
    latitude: -23.5534,
    longitude: -46.6401,
    street: 'Rua Vergueiro',
    description: 'Buraco no asfalto na Rua Vergueiro (registro 50)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(11) 98765-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3414',
    problem: 'Iluminação pública',
    registerDate: '2026-10-25T01:55:35Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Praça Ramos de Azevedo',
    description: 'Iluminação pública na Praça Ramos de Azevedo (registro 51)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(11) 98765-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3415',
    problem: 'Vazamento de água',
    registerDate: '2026-10-26T08:08:52Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Rua Fradique Coutinho',
    description: 'Vazamento de água na Rua Fradique Coutinho (registro 52)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(11) 98765-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3416',
    problem: 'Acúmulo de lixo',
    registerDate: '2026-10-27T15:21:09Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Rua da Consolação',
    description: 'Acúmulo de lixo na Rua da Consolação (registro 53)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(11) 98765-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3417',
    problem: 'Semáforo com defeito',
    registerDate: '2026-10-28T22:34:26Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Rua Cardeal Arcoverde',
    description: 'Semáforo com defeito na Rua Cardeal Arcoverde (registro 54)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(11) 98765-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3418',
    problem: 'Calçada danificada',
    registerDate: '2026-10-29T05:47:43Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Rua 25 de Março',
    description: 'Calçada danificada na Rua 25 de Março (registro 55)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(11) 98765-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3419',
    problem: 'Sinalização viária',
    registerDate: '2026-10-30T12:00:00Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Avenida Ipiranga',
    description: 'Sinalização viária na Avenida Ipiranga (registro 56)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(11) 98765-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c341A',
    problem: 'Esgoto a céu aberto',
    registerDate: '2026-10-31T19:13:17Z',
    latitude: -23.5684,
    longitude: -46.6872,
    street: 'Rua Oscar Freire',
    description: 'Esgoto a céu aberto na Rua Oscar Freire (registro 57)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(11) 98765-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c341B',
    problem: 'Árvore caída',
    registerDate: '2026-10-01T02:26:34Z',
    latitude: -23.5567,
    longitude: -46.6498,
    street: 'Avenida Brigadeiro Faria Lima',
    description: 'Árvore caída na Avenida Brigadeiro Faria Lima (registro 58)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(11) 98765-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c341C',
    problem: 'Buraco na ciclofaixa',
    registerDate: '2026-10-02T09:39:51Z',
    latitude: -23.5345,
    longitude: -46.6421,
    street: 'Avenida Brigadeiro Luís Antônio',
    description: 'Buraco na ciclofaixa na Avenida Brigadeiro Luís Antônio (registro 59)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(11) 98765-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c341D',
    problem: 'Pichação',
    registerDate: '2026-10-03T16:52:08Z',
    latitude: -23.5534,
    longitude: -46.6401,
    street: 'Rua Augusta',
    description: 'Pichação na Rua Augusta (registro 60)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(11) 98765-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c341E',
    problem: 'Vazamento de gás',
    registerDate: '2026-10-04T23:05:25Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Rua Líbero Badaró',
    description: 'Vazamento de gás na Rua Líbero Badaró (registro 61)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(11) 98765-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c341F',
    problem: 'Lixeira transbordando',
    registerDate: '2026-10-05T06:18:42Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Praça do Pôr do Sol',
    description: 'Lixeira transbordando na Praça do Pôr do Sol (registro 62)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(11) 98765-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3420',
    problem: 'Faixa de pedestres apagada',
    registerDate: '2026-10-06T13:31:59Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Rua Direita',
    description: 'Faixa de pedestres apagada na Rua Direita (registro 63)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(11) 98765-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3421',
    problem: 'Ponto de ônibus danificado',
    registerDate: '2026-10-07T20:44:16Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Praça Roosevelt',
    description: 'Ponto de ônibus danificado na Praça Roosevelt (registro 64)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(11) 98765-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3422',
    problem: 'Infiltração',
    registerDate: '2026-10-08T03:57:33Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Rua Haddock Lobo',
    description: 'Infiltração na Rua Haddock Lobo (registro 65)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(11) 98765-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3423',
    problem: 'Rachadura no asfalto',
    registerDate: '2026-10-09T10:10:50Z',
    latitude: -23.5392,
    longitude: -46.6563,
    street: 'Avenida Rebouças',
    description: 'Rachadura no asfalto na Avenida Rebouças (registro 66)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(11) 98765-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3424',
    problem: 'Fiação exposta',
    registerDate: '2026-10-10T17:23:07Z',
    latitude: -23.5587,
    longitude: -46.6312,
    street: 'Avenida Paulista',
    description: 'Fiação exposta na Avenida Paulista (registro 67)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(11) 98765-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3425',
    problem: 'Bueiro aberto',
    registerDate: '2026-10-11T00:36:24Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Rua Vergueiro',
    description: 'Bueiro aberto na Rua Vergueiro (registro 68)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(11) 98765-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3426',
    problem: 'Buraco no asfalto',
    registerDate: '2026-10-12T07:49:41Z',
    latitude: -23.5445,
    longitude: -46.6642,
    street: 'Praça Ramos de Azevedo',
    description: 'Buraco no asfalto na Praça Ramos de Azevedo (registro 69)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(11) 98765-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3427',
    problem: 'Iluminação pública',
    registerDate: '2026-10-13T14:02:58Z',
    latitude: -23.5629,
    longitude: -46.6544,
    street: 'Rua Fradique Coutinho',
    description: 'Iluminação pública na Rua Fradique Coutinho (registro 70)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(11) 98765-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3428',
    problem: 'Vazamento de água',
    registerDate: '2026-10-14T21:15:15Z',
    latitude: -23.5512,
    longitude: -46.6289,
    street: 'Rua da Consolação',
    description: 'Vazamento de água na Rua da Consolação (registro 71)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(11) 98765-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3429',
    problem: 'Acúmulo de lixo',
    registerDate: '2026-10-15T04:28:32Z',
    latitude: -23.5684,
    longitude: -46.6872,
    street: 'Rua Cardeal Arcoverde',
    description: 'Acúmulo de lixo na Rua Cardeal Arcoverde (registro 72)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(11) 98765-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c342A',
    problem: 'Semáforo com defeito',
    registerDate: '2026-10-16T11:41:49Z',
    latitude: -23.5421,
    longitude: -46.6378,
    street: 'Rua 25 de Março',
    description: 'Semáforo com defeito na Rua 25 de Março (registro 73)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(11) 98765-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c342B',
    problem: 'Calçada danificada',
    registerDate: '2026-10-17T18:54:06Z',
    latitude: -23.5789,
    longitude: -46.6621,
    street: 'Avenida Ipiranga',
    description: 'Calçada danificada na Avenida Ipiranga (registro 74)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(11) 98765-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c342C',
    problem: 'Sinalização viária',
    registerDate: '2026-10-18T01:07:23Z',
    latitude: -23.5567,
    longitude: -46.6498,
    street: 'Rua Oscar Freire',
    description: 'Sinalização viária na Rua Oscar Freire (registro 75)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(11) 98765-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c342D',
    problem: 'Esgoto a céu aberto',
    registerDate: '2026-10-19T08:20:40Z',
    latitude: -23.5345,
    longitude: -46.6421,
    street: 'Avenida Brigadeiro Faria Lima',
    description: 'Esgoto a céu aberto na Avenida Brigadeiro Faria Lima (registro 76)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(11) 98765-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c342E',
    problem: 'Árvore caída',
    registerDate: '2026-10-20T15:33:57Z',
    latitude: -23.5812,
    longitude: -46.6754,
    street: 'Avenida Brigadeiro Luís Antônio',
    description: 'Árvore caída na Avenida Brigadeiro Luís Antônio (registro 77)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(11) 98765-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c342F',
    problem: 'Buraco na ciclofaixa',
    registerDate: '2026-10-21T22:46:14Z',
    latitude: -23.5487,
    longitude: -46.6356,
    street: 'Rua Augusta',
    description: 'Buraco na ciclofaixa na Rua Augusta (registro 78)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(11) 98765-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3430',
    problem: 'Pichação',
    registerDate: '2026-10-22T05:59:31Z',
    latitude: -23.5698,
    longitude: -46.6598,
    street: 'Rua Líbero Badaró',
    description: 'Pichação na Rua Líbero Badaró (registro 79)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(11) 98765-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3431',
    problem: 'Vazamento de gás',
    registerDate: '2026-10-23T12:12:48Z',
    latitude: -23.5534,
    longitude: -46.6401,
    street: 'Praça do Pôr do Sol',
    description: 'Vazamento de gás na Praça do Pôr do Sol (registro 80)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(11) 98765-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3432',
    problem: 'Lixeira transbordando',
    registerDate: '2026-10-24T19:25:05Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Rua Direita',
    description: 'Lixeira transbordando na Rua Direita (registro 81)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(11) 98765-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3433',
    problem: 'Faixa de pedestres apagada',
    registerDate: '2026-10-25T02:38:22Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Praça Roosevelt',
    description: 'Faixa de pedestres apagada na Praça Roosevelt (registro 82)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(11) 98765-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3434',
    problem: 'Ponto de ônibus danificado',
    registerDate: '2026-10-26T09:51:39Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Rua Haddock Lobo',
    description: 'Ponto de ônibus danificado na Rua Haddock Lobo (registro 83)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(11) 98765-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3435',
    problem: 'Infiltração',
    registerDate: '2026-10-27T16:04:56Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Avenida Rebouças',
    description: 'Infiltração na Avenida Rebouças (registro 84)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(11) 98765-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3436',
    problem: 'Rachadura no asfalto',
    registerDate: '2026-10-28T23:17:13Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Avenida Paulista',
    description: 'Rachadura no asfalto na Avenida Paulista (registro 85)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(11) 98765-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3437',
    problem: 'Fiação exposta',
    registerDate: '2026-10-29T06:30:30Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Rua Vergueiro',
    description: 'Fiação exposta na Rua Vergueiro (registro 86)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(11) 98765-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3438',
    problem: 'Bueiro aberto',
    registerDate: '2026-10-30T13:43:47Z',
    latitude: -23.5684,
    longitude: -46.6872,
    street: 'Praça Ramos de Azevedo',
    description: 'Bueiro aberto na Praça Ramos de Azevedo (registro 87)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(11) 98765-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3439',
    problem: 'Buraco no asfalto',
    registerDate: '2026-10-31T20:56:04Z',
    latitude: -23.5567,
    longitude: -46.6498,
    street: 'Rua Fradique Coutinho',
    description: 'Buraco no asfalto na Rua Fradique Coutinho (registro 88)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(11) 98765-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c343A',
    problem: 'Iluminação pública',
    registerDate: '2026-10-01T03:09:21Z',
    latitude: -23.5345,
    longitude: -46.6421,
    street: 'Rua da Consolação',
    description: 'Iluminação pública na Rua da Consolação (registro 89)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(11) 98765-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c343B',
    problem: 'Vazamento de água',
    registerDate: '2026-10-02T10:22:38Z',
    latitude: -23.5534,
    longitude: -46.6401,
    street: 'Rua Cardeal Arcoverde',
    description: 'Vazamento de água na Rua Cardeal Arcoverde (registro 90)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(11) 98765-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c343C',
    problem: 'Acúmulo de lixo',
    registerDate: '2026-10-03T17:35:55Z',
    latitude: -23.5505,
    longitude: -46.6333,
    street: 'Rua 25 de Março',
    description: 'Acúmulo de lixo na Rua 25 de Março (registro 91)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(11) 98765-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c343D',
    problem: 'Semáforo com defeito',
    registerDate: '2026-10-04T00:48:12Z',
    latitude: -23.5618,
    longitude: -46.6567,
    street: 'Avenida Ipiranga',
    description: 'Semáforo com defeito na Avenida Ipiranga (registro 92)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Paraíso', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(11) 98765-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c343E',
    problem: 'Calçada danificada',
    registerDate: '2026-10-05T07:01:29Z',
    latitude: -23.5489,
    longitude: -46.6388,
    street: 'Rua Oscar Freire',
    description: 'Calçada danificada na Rua Oscar Freire (registro 93)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Pinheiros', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(11) 98765-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c343F',
    problem: 'Sinalização viária',
    registerDate: '2026-10-06T14:14:46Z',
    latitude: -23.5558,
    longitude: -46.6698,
    street: 'Avenida Brigadeiro Faria Lima',
    description: 'Sinalização viária na Avenida Brigadeiro Faria Lima (registro 94)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Bela Vista', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(11) 98765-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3440',
    problem: 'Esgoto a céu aberto',
    registerDate: '2026-10-07T21:27:03Z',
    latitude: -23.5671,
    longitude: -46.6489,
    street: 'Avenida Brigadeiro Luís Antônio',
    description: 'Esgoto a céu aberto na Avenida Brigadeiro Luís Antônio (registro 95)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Consolação', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(11) 98765-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3441',
    problem: 'Árvore caída',
    registerDate: '2026-10-08T04:40:20Z',
    latitude: -23.5392,
    longitude: -46.6563,
    street: 'Rua Augusta',
    description: 'Árvore caída na Rua Augusta (registro 96)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardins', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(11) 98765-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3442',
    problem: 'Buraco na ciclofaixa',
    registerDate: '2026-10-09T11:53:37Z',
    latitude: -23.5587,
    longitude: -46.6312,
    street: 'Rua Líbero Badaró',
    description: 'Buraco na ciclofaixa na Rua Líbero Badaró (registro 97)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Sé', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(11) 98765-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3443',
    problem: 'Pichação',
    registerDate: '2026-10-10T18:06:54Z',
    latitude: -23.5733,
    longitude: -46.6417,
    street: 'Praça do Pôr do Sol',
    description: 'Pichação na Praça do Pôr do Sol (registro 98)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Itaim Bibi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(11) 98765-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3444',
    problem: 'Vazamento de gás',
    registerDate: '2026-10-11T01:19:11Z',
    latitude: -23.5445,
    longitude: -46.6642,
    street: 'Rua Direita',
    description: 'Vazamento de gás na Rua Direita (registro 99)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Cerqueira César', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(11) 98765-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c3445',
    problem: 'Lixeira transbordando',
    registerDate: '2026-10-12T08:32:28Z',
    latitude: -23.5629,
    longitude: -46.6544,
    street: 'Praça Roosevelt',
    description: 'Lixeira transbordando na Praça Roosevelt (registro 100)',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'República', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(11) 98765-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco.jpg']
  }
];
