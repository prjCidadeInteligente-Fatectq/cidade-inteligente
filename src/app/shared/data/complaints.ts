import { Complaint } from '@core/models';

export const complaints: Complaint[] = [
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0001',
    problem: 'Buraco na rua',
    registerDate: '2026-01-01T00:00:00Z',
    latitude: -21.4055,
    longitude: -48.505,
    street: 'Rua 24 de Outubro',
    description: 'Buraco na Rua 24 de Outubro, bairro Centro, causando transtornos aos moradores e motoristas (registro 1).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0002',
    problem: 'Buraco na rua',
    registerDate: '2026-04-02T07:13:17Z',
    latitude: -21.4062,
    longitude: -48.5061,
    street: 'Rua General Osório',
    description: 'Buraco na Rua General Osório, bairro Centro, causando transtornos aos moradores e motoristas (registro 2).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0003',
    problem: 'Buraco na rua',
    registerDate: '2026-07-03T14:26:34Z',
    latitude: -21.4069,
    longitude: -48.5072,
    street: 'Rua Duque de Caxias',
    description: 'Buraco na Rua Duque de Caxias, bairro Centro, causando transtornos aos moradores e motoristas (registro 3).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0004',
    problem: 'Buraco na rua',
    registerDate: '2026-10-04T21:39:51Z',
    latitude: -21.4076,
    longitude: -48.5083,
    street: 'Rua Sete de Setembro',
    description: 'Buraco na Rua Sete de Setembro, bairro Centro, causando transtornos aos moradores e motoristas (registro 4).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0005',
    problem: 'Buraco na rua',
    registerDate: '2026-03-05T04:52:08Z',
    latitude: -21.4083,
    longitude: -48.5094,
    street: 'Rua Tiradentes',
    description: 'Buraco na Rua Tiradentes, bairro Centro, causando transtornos aos moradores e motoristas (registro 5).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0006',
    problem: 'Buraco na rua',
    registerDate: '2026-06-06T11:05:25Z',
    latitude: -21.409,
    longitude: -48.5105,
    street: 'Rua Rui Barbosa',
    description: 'Buraco na Rua Rui Barbosa, bairro Centro, causando transtornos aos moradores e motoristas (registro 6).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0007',
    problem: 'Buraco na rua',
    registerDate: '2026-09-07T18:18:42Z',
    latitude: -21.4097,
    longitude: -48.5116,
    street: 'Avenida Paulo Roberto Scandar',
    description: 'Buraco na Avenida Paulo Roberto Scandar, bairro Centro, causando transtornos aos moradores e motoristas (registro 7).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0008',
    problem: 'Buraco na rua',
    registerDate: '2026-02-08T01:31:59Z',
    latitude: -21.4104,
    longitude: -48.5127,
    street: 'Rua Marechal Deodoro',
    description: 'Buraco na Rua Marechal Deodoro, bairro Centro, causando transtornos aos moradores e motoristas (registro 8).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0009',
    problem: 'Buraco na rua',
    registerDate: '2026-05-09T08:44:16Z',
    latitude: -21.4111,
    longitude: -48.5138,
    street: 'Rua 24 de Outubro',
    description: 'Buraco na Rua 24 de Outubro, bairro Centro, causando transtornos aos moradores e motoristas (registro 9).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0010',
    problem: 'Buraco na rua',
    registerDate: '2026-08-10T15:57:33Z',
    latitude: -21.4118,
    longitude: -48.5149,
    street: 'Rua General Osório',
    description: 'Buraco na Rua General Osório, bairro Centro, causando transtornos aos moradores e motoristas (registro 10).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0011',
    problem: 'Buraco na rua',
    registerDate: '2026-01-11T22:10:50Z',
    latitude: -21.4125,
    longitude: -48.516,
    street: 'Rua Duque de Caxias',
    description: 'Buraco na Rua Duque de Caxias, bairro Centro, causando transtornos aos moradores e motoristas (registro 11).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0012',
    problem: 'Buraco na rua',
    registerDate: '2026-04-12T05:23:07Z',
    latitude: -21.4132,
    longitude: -48.5171,
    street: 'Rua Sete de Setembro',
    description: 'Buraco na Rua Sete de Setembro, bairro Centro, causando transtornos aos moradores e motoristas (registro 12).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0013',
    problem: 'Buraco na rua',
    registerDate: '2026-07-13T12:36:24Z',
    latitude: -21.4139,
    longitude: -48.5182,
    street: 'Rua Tiradentes',
    description: 'Buraco na Rua Tiradentes, bairro Centro, causando transtornos aos moradores e motoristas (registro 13).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0014',
    problem: 'Buraco na rua',
    registerDate: '2026-10-14T19:49:41Z',
    latitude: -21.4146,
    longitude: -48.5193,
    street: 'Rua Rui Barbosa',
    description: 'Buraco na Rua Rui Barbosa, bairro Centro, causando transtornos aos moradores e motoristas (registro 14).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0015',
    problem: 'Buraco na rua',
    registerDate: '2026-03-15T02:02:58Z',
    latitude: -21.4153,
    longitude: -48.5204,
    street: 'Avenida Paulo Roberto Scandar',
    description: 'Buraco na Avenida Paulo Roberto Scandar, bairro Centro, causando transtornos aos moradores e motoristas (registro 15).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0016',
    problem: 'Buraco na rua',
    registerDate: '2026-06-16T09:15:15Z',
    latitude: -21.416,
    longitude: -48.5215,
    street: 'Rua Marechal Deodoro',
    description: 'Buraco na Rua Marechal Deodoro, bairro Centro, causando transtornos aos moradores e motoristas (registro 16).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0017',
    problem: 'Buraco na rua',
    registerDate: '2026-09-17T16:28:32Z',
    latitude: -21.4167,
    longitude: -48.5226,
    street: 'Rua 24 de Outubro',
    description: 'Buraco na Rua 24 de Outubro, bairro Centro, causando transtornos aos moradores e motoristas (registro 17).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0018',
    problem: 'Buraco na rua',
    registerDate: '2026-02-18T23:41:49Z',
    latitude: -21.4174,
    longitude: -48.5057,
    street: 'Rua General Osório',
    description: 'Buraco na Rua General Osório, bairro Centro, causando transtornos aos moradores e motoristas (registro 18).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0019',
    problem: 'Buraco na rua',
    registerDate: '2026-05-19T06:54:06Z',
    latitude: -21.4181,
    longitude: -48.5068,
    street: 'Rua Duque de Caxias',
    description: 'Buraco na Rua Duque de Caxias, bairro Centro, causando transtornos aos moradores e motoristas (registro 19).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0020',
    problem: 'Buraco na rua',
    registerDate: '2026-08-20T13:07:23Z',
    latitude: -21.4188,
    longitude: -48.5079,
    street: 'Rua Sete de Setembro',
    description: 'Buraco na Rua Sete de Setembro, bairro Centro, causando transtornos aos moradores e motoristas (registro 20).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0021',
    problem: 'Buraco na rua',
    registerDate: '2026-01-21T20:20:40Z',
    latitude: -21.4195,
    longitude: -48.509,
    street: 'Rua Tiradentes',
    description: 'Buraco na Rua Tiradentes, bairro Centro, causando transtornos aos moradores e motoristas (registro 21).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0022',
    problem: 'Buraco na rua',
    registerDate: '2026-04-22T03:33:57Z',
    latitude: -21.4202,
    longitude: -48.5101,
    street: 'Rua Rui Barbosa',
    description: 'Buraco na Rua Rui Barbosa, bairro Centro, causando transtornos aos moradores e motoristas (registro 22).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0023',
    problem: 'Buraco na rua',
    registerDate: '2026-07-23T10:46:14Z',
    latitude: -21.4209,
    longitude: -48.5112,
    street: 'Avenida Paulo Roberto Scandar',
    description: 'Buraco na Avenida Paulo Roberto Scandar, bairro Centro, causando transtornos aos moradores e motoristas (registro 23).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0024',
    problem: 'Buraco na rua',
    registerDate: '2026-10-24T17:59:31Z',
    latitude: -21.4216,
    longitude: -48.5123,
    street: 'Rua Marechal Deodoro',
    description: 'Buraco na Rua Marechal Deodoro, bairro Centro, causando transtornos aos moradores e motoristas (registro 24).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0025',
    problem: 'Buraco na rua',
    registerDate: '2026-03-25T00:12:48Z',
    latitude: -21.4223,
    longitude: -48.5134,
    street: 'Rua 24 de Outubro',
    description: 'Buraco na Rua 24 de Outubro, bairro Centro, causando transtornos aos moradores e motoristas (registro 25).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000001', name: 'Centro', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0026',
    problem: 'Buraco na rua',
    registerDate: '2026-06-26T07:25:05Z',
    latitude: -21.423,
    longitude: -48.5145,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 26).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0027',
    problem: 'Buraco na rua',
    registerDate: '2026-09-27T14:38:22Z',
    latitude: -21.4057,
    longitude: -48.5156,
    street: 'Avenida Emílio Girotto',
    description: 'Buraco na Avenida Emílio Girotto, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 27).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0028',
    problem: 'Buraco na rua',
    registerDate: '2026-02-28T21:51:39Z',
    latitude: -21.4064,
    longitude: -48.5167,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 28).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0029',
    problem: 'Buraco na rua',
    registerDate: '2026-05-01T04:04:56Z',
    latitude: -21.4071,
    longitude: -48.5178,
    street: 'Praça Doutor Fued Simão',
    description: 'Buraco na Praça Doutor Fued Simão, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 29).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0030',
    problem: 'Buraco na rua',
    registerDate: '2026-08-02T11:17:13Z',
    latitude: -21.4078,
    longitude: -48.5189,
    street: 'Rua Clineu Braga de Magalhães',
    description: 'Buraco na Rua Clineu Braga de Magalhães, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 30).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0031',
    problem: 'Buraco na rua',
    registerDate: '2026-01-03T18:30:30Z',
    latitude: -21.4085,
    longitude: -48.52,
    street: 'Rua Bernardino Sampaio',
    description: 'Buraco na Rua Bernardino Sampaio, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 31).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0032',
    problem: 'Buraco na rua',
    registerDate: '2026-04-04T01:43:47Z',
    latitude: -21.4092,
    longitude: -48.5211,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 32).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0033',
    problem: 'Buraco na rua',
    registerDate: '2026-07-05T08:56:04Z',
    latitude: -21.4099,
    longitude: -48.5222,
    street: 'Avenida Emílio Girotto',
    description: 'Buraco na Avenida Emílio Girotto, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 33).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0034',
    problem: 'Buraco na rua',
    registerDate: '2026-10-06T15:09:21Z',
    latitude: -21.4106,
    longitude: -48.5053,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 34).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0035',
    problem: 'Buraco na rua',
    registerDate: '2026-03-07T22:22:38Z',
    latitude: -21.4113,
    longitude: -48.5064,
    street: 'Praça Doutor Fued Simão',
    description: 'Buraco na Praça Doutor Fued Simão, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 35).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0036',
    problem: 'Buraco na rua',
    registerDate: '2026-06-08T05:35:55Z',
    latitude: -21.412,
    longitude: -48.5075,
    street: 'Rua Clineu Braga de Magalhães',
    description: 'Buraco na Rua Clineu Braga de Magalhães, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 36).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0037',
    problem: 'Buraco na rua',
    registerDate: '2026-09-09T12:48:12Z',
    latitude: -21.4127,
    longitude: -48.5086,
    street: 'Rua Bernardino Sampaio',
    description: 'Buraco na Rua Bernardino Sampaio, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 37).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0038',
    problem: 'Buraco na rua',
    registerDate: '2026-02-10T19:01:29Z',
    latitude: -21.4134,
    longitude: -48.5097,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 38).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0039',
    problem: 'Buraco na rua',
    registerDate: '2026-05-11T02:14:46Z',
    latitude: -21.4141,
    longitude: -48.5108,
    street: 'Avenida Emílio Girotto',
    description: 'Buraco na Avenida Emílio Girotto, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 39).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0040',
    problem: 'Buraco na rua',
    registerDate: '2026-08-12T09:27:03Z',
    latitude: -21.4148,
    longitude: -48.5119,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 40).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0041',
    problem: 'Buraco na rua',
    registerDate: '2026-01-13T16:40:20Z',
    latitude: -21.4155,
    longitude: -48.513,
    street: 'Praça Doutor Fued Simão',
    description: 'Buraco na Praça Doutor Fued Simão, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 41).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0042',
    problem: 'Buraco na rua',
    registerDate: '2026-04-14T23:53:37Z',
    latitude: -21.4162,
    longitude: -48.5141,
    street: 'Rua Clineu Braga de Magalhães',
    description: 'Buraco na Rua Clineu Braga de Magalhães, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 42).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0043',
    problem: 'Buraco na rua',
    registerDate: '2026-07-15T06:06:54Z',
    latitude: -21.4169,
    longitude: -48.5152,
    street: 'Rua Bernardino Sampaio',
    description: 'Buraco na Rua Bernardino Sampaio, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 43).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0044',
    problem: 'Buraco na rua',
    registerDate: '2026-10-16T13:19:11Z',
    latitude: -21.4176,
    longitude: -48.5163,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 44).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0045',
    problem: 'Buraco na rua',
    registerDate: '2026-03-17T20:32:28Z',
    latitude: -21.4183,
    longitude: -48.5174,
    street: 'Avenida Emílio Girotto',
    description: 'Buraco na Avenida Emílio Girotto, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 45).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0046',
    problem: 'Buraco na rua',
    registerDate: '2026-06-18T03:45:45Z',
    latitude: -21.419,
    longitude: -48.5185,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 46).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0047',
    problem: 'Buraco na rua',
    registerDate: '2026-09-19T10:58:02Z',
    latitude: -21.4197,
    longitude: -48.5196,
    street: 'Praça Doutor Fued Simão',
    description: 'Buraco na Praça Doutor Fued Simão, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 47).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0048',
    problem: 'Buraco na rua',
    registerDate: '2026-02-20T17:11:19Z',
    latitude: -21.4204,
    longitude: -48.5207,
    street: 'Rua Clineu Braga de Magalhães',
    description: 'Buraco na Rua Clineu Braga de Magalhães, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 48).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0049',
    problem: 'Buraco na rua',
    registerDate: '2026-05-21T00:24:36Z',
    latitude: -21.4211,
    longitude: -48.5218,
    street: 'Rua Bernardino Sampaio',
    description: 'Buraco na Rua Bernardino Sampaio, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 49).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0050',
    problem: 'Buraco na rua',
    registerDate: '2026-08-22T07:37:53Z',
    latitude: -21.4218,
    longitude: -48.5229,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Paraíso, causando transtornos aos moradores e motoristas (registro 50).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000002', name: 'Jardim Paraíso', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0051',
    problem: 'Buraco na rua',
    registerDate: '2026-01-23T14:50:10Z',
    latitude: -21.4225,
    longitude: -48.506,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 51).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0052',
    problem: 'Buraco na rua',
    registerDate: '2026-04-24T21:03:27Z',
    latitude: -21.4232,
    longitude: -48.5071,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 52).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0053',
    problem: 'Buraco na rua',
    registerDate: '2026-07-25T04:16:44Z',
    latitude: -21.4059,
    longitude: -48.5082,
    street: 'Avenida Heitor Alves Gomes',
    description: 'Buraco na Avenida Heitor Alves Gomes, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 53).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0054',
    problem: 'Buraco na rua',
    registerDate: '2026-10-26T11:29:01Z',
    latitude: -21.4066,
    longitude: -48.5093,
    street: 'Praça Edwil Roncada',
    description: 'Buraco na Praça Edwil Roncada, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 54).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0055',
    problem: 'Buraco na rua',
    registerDate: '2026-03-27T18:42:18Z',
    latitude: -21.4073,
    longitude: -48.5104,
    street: 'Rua Major Calderazzo',
    description: 'Buraco na Rua Major Calderazzo, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 55).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0056',
    problem: 'Buraco na rua',
    registerDate: '2026-06-28T01:55:35Z',
    latitude: -21.408,
    longitude: -48.5115,
    street: 'Rua Santo Zorati',
    description: 'Buraco na Rua Santo Zorati, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 56).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0057',
    problem: 'Buraco na rua',
    registerDate: '2026-09-01T08:08:52Z',
    latitude: -21.4087,
    longitude: -48.5126,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 57).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0058',
    problem: 'Buraco na rua',
    registerDate: '2026-02-02T15:21:09Z',
    latitude: -21.4094,
    longitude: -48.5137,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 58).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0059',
    problem: 'Buraco na rua',
    registerDate: '2026-05-03T22:34:26Z',
    latitude: -21.4101,
    longitude: -48.5148,
    street: 'Avenida Heitor Alves Gomes',
    description: 'Buraco na Avenida Heitor Alves Gomes, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 59).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0060',
    problem: 'Buraco na rua',
    registerDate: '2026-08-04T05:47:43Z',
    latitude: -21.4108,
    longitude: -48.5159,
    street: 'Praça Edwil Roncada',
    description: 'Buraco na Praça Edwil Roncada, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 60).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0061',
    problem: 'Buraco na rua',
    registerDate: '2026-01-05T12:00:00Z',
    latitude: -21.4115,
    longitude: -48.517,
    street: 'Rua Major Calderazzo',
    description: 'Buraco na Rua Major Calderazzo, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 61).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0062',
    problem: 'Buraco na rua',
    registerDate: '2026-04-06T19:13:17Z',
    latitude: -21.4122,
    longitude: -48.5181,
    street: 'Rua Santo Zorati',
    description: 'Buraco na Rua Santo Zorati, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 62).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0063',
    problem: 'Buraco na rua',
    registerDate: '2026-07-07T02:26:34Z',
    latitude: -21.4129,
    longitude: -48.5192,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 63).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0064',
    problem: 'Buraco na rua',
    registerDate: '2026-10-08T09:39:51Z',
    latitude: -21.4136,
    longitude: -48.5203,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 64).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0065',
    problem: 'Buraco na rua',
    registerDate: '2026-03-09T16:52:08Z',
    latitude: -21.4143,
    longitude: -48.5214,
    street: 'Avenida Heitor Alves Gomes',
    description: 'Buraco na Avenida Heitor Alves Gomes, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 65).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0066',
    problem: 'Buraco na rua',
    registerDate: '2026-06-10T23:05:25Z',
    latitude: -21.415,
    longitude: -48.5225,
    street: 'Praça Edwil Roncada',
    description: 'Buraco na Praça Edwil Roncada, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 66).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0067',
    problem: 'Buraco na rua',
    registerDate: '2026-09-11T06:18:42Z',
    latitude: -21.4157,
    longitude: -48.5056,
    street: 'Rua Major Calderazzo',
    description: 'Buraco na Rua Major Calderazzo, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 67).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0068',
    problem: 'Buraco na rua',
    registerDate: '2026-02-12T13:31:59Z',
    latitude: -21.4164,
    longitude: -48.5067,
    street: 'Rua Santo Zorati',
    description: 'Buraco na Rua Santo Zorati, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 68).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0069',
    problem: 'Buraco na rua',
    registerDate: '2026-05-13T20:44:16Z',
    latitude: -21.4171,
    longitude: -48.5078,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 69).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0070',
    problem: 'Buraco na rua',
    registerDate: '2026-08-14T03:57:33Z',
    latitude: -21.4178,
    longitude: -48.5089,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 70).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0071',
    problem: 'Buraco na rua',
    registerDate: '2026-01-15T10:10:50Z',
    latitude: -21.4185,
    longitude: -48.51,
    street: 'Avenida Heitor Alves Gomes',
    description: 'Buraco na Avenida Heitor Alves Gomes, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 71).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0072',
    problem: 'Buraco na rua',
    registerDate: '2026-04-16T17:23:07Z',
    latitude: -21.4192,
    longitude: -48.5111,
    street: 'Praça Edwil Roncada',
    description: 'Buraco na Praça Edwil Roncada, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 72).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0073',
    problem: 'Buraco na rua',
    registerDate: '2026-07-17T00:36:24Z',
    latitude: -21.4199,
    longitude: -48.5122,
    street: 'Rua Major Calderazzo',
    description: 'Buraco na Rua Major Calderazzo, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 73).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0074',
    problem: 'Buraco na rua',
    registerDate: '2026-10-18T07:49:41Z',
    latitude: -21.4206,
    longitude: -48.5133,
    street: 'Rua Santo Zorati',
    description: 'Buraco na Rua Santo Zorati, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 74).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0075',
    problem: 'Buraco na rua',
    registerDate: '2026-03-19T14:02:58Z',
    latitude: -21.4213,
    longitude: -48.5144,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Jardim São Sebastião, causando transtornos aos moradores e motoristas (registro 75).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000003', name: 'Jardim São Sebastião', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0076',
    problem: 'Buraco na rua',
    registerDate: '2026-06-20T21:15:15Z',
    latitude: -21.422,
    longitude: -48.5155,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 76).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0077',
    problem: 'Buraco na rua',
    registerDate: '2026-09-21T04:28:32Z',
    latitude: -21.4227,
    longitude: -48.5166,
    street: 'Avenida João di Jorge',
    description: 'Buraco na Avenida João di Jorge, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 77).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0078',
    problem: 'Buraco na rua',
    registerDate: '2026-02-22T11:41:49Z',
    latitude: -21.4234,
    longitude: -48.5177,
    street: 'Praça São João',
    description: 'Buraco na Praça São João, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 78).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0079',
    problem: 'Buraco na rua',
    registerDate: '2026-05-23T18:54:06Z',
    latitude: -21.4061,
    longitude: -48.5188,
    street: 'Rua General Glicério',
    description: 'Buraco na Rua General Glicério, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 79).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0080',
    problem: 'Buraco na rua',
    registerDate: '2026-08-24T01:07:23Z',
    latitude: -21.4068,
    longitude: -48.5199,
    street: 'Rua Miguel Anselmo',
    description: 'Buraco na Rua Miguel Anselmo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 80).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0081',
    problem: 'Buraco na rua',
    registerDate: '2026-01-25T08:20:40Z',
    latitude: -21.4075,
    longitude: -48.521,
    street: 'Rua Barão do Triunfo',
    description: 'Buraco na Rua Barão do Triunfo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 81).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0082',
    problem: 'Buraco na rua',
    registerDate: '2026-04-26T15:33:57Z',
    latitude: -21.4082,
    longitude: -48.5221,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 82).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0083',
    problem: 'Buraco na rua',
    registerDate: '2026-07-27T22:46:14Z',
    latitude: -21.4089,
    longitude: -48.5052,
    street: 'Avenida João di Jorge',
    description: 'Buraco na Avenida João di Jorge, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 83).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0084',
    problem: 'Buraco na rua',
    registerDate: '2026-10-28T05:59:31Z',
    latitude: -21.4096,
    longitude: -48.5063,
    street: 'Praça São João',
    description: 'Buraco na Praça São João, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 84).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0085',
    problem: 'Buraco na rua',
    registerDate: '2026-03-01T12:12:48Z',
    latitude: -21.4103,
    longitude: -48.5074,
    street: 'Rua General Glicério',
    description: 'Buraco na Rua General Glicério, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 85).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0086',
    problem: 'Buraco na rua',
    registerDate: '2026-06-02T19:25:05Z',
    latitude: -21.411,
    longitude: -48.5085,
    street: 'Rua Miguel Anselmo',
    description: 'Buraco na Rua Miguel Anselmo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 86).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0087',
    problem: 'Buraco na rua',
    registerDate: '2026-09-03T02:38:22Z',
    latitude: -21.4117,
    longitude: -48.5096,
    street: 'Rua Barão do Triunfo',
    description: 'Buraco na Rua Barão do Triunfo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 87).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0088',
    problem: 'Buraco na rua',
    registerDate: '2026-02-04T09:51:39Z',
    latitude: -21.4124,
    longitude: -48.5107,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 88).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0089',
    problem: 'Buraco na rua',
    registerDate: '2026-05-05T16:04:56Z',
    latitude: -21.4131,
    longitude: -48.5118,
    street: 'Avenida João di Jorge',
    description: 'Buraco na Avenida João di Jorge, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 89).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0090',
    problem: 'Buraco na rua',
    registerDate: '2026-08-06T23:17:13Z',
    latitude: -21.4138,
    longitude: -48.5129,
    street: 'Praça São João',
    description: 'Buraco na Praça São João, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 90).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0091',
    problem: 'Buraco na rua',
    registerDate: '2026-01-07T06:30:30Z',
    latitude: -21.4145,
    longitude: -48.514,
    street: 'Rua General Glicério',
    description: 'Buraco na Rua General Glicério, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 91).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0092',
    problem: 'Buraco na rua',
    registerDate: '2026-04-08T13:43:47Z',
    latitude: -21.4152,
    longitude: -48.5151,
    street: 'Rua Miguel Anselmo',
    description: 'Buraco na Rua Miguel Anselmo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 92).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0093',
    problem: 'Buraco na rua',
    registerDate: '2026-07-09T20:56:04Z',
    latitude: -21.4159,
    longitude: -48.5162,
    street: 'Rua Barão do Triunfo',
    description: 'Buraco na Rua Barão do Triunfo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 93).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0094',
    problem: 'Buraco na rua',
    registerDate: '2026-10-10T03:09:21Z',
    latitude: -21.4166,
    longitude: -48.5173,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 94).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0095',
    problem: 'Buraco na rua',
    registerDate: '2026-03-11T10:22:38Z',
    latitude: -21.4173,
    longitude: -48.5184,
    street: 'Avenida João di Jorge',
    description: 'Buraco na Avenida João di Jorge, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 95).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0096',
    problem: 'Buraco na rua',
    registerDate: '2026-06-12T17:35:55Z',
    latitude: -21.418,
    longitude: -48.5195,
    street: 'Praça São João',
    description: 'Buraco na Praça São João, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 96).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0097',
    problem: 'Buraco na rua',
    registerDate: '2026-09-13T00:48:12Z',
    latitude: -21.4187,
    longitude: -48.5206,
    street: 'Rua General Glicério',
    description: 'Buraco na Rua General Glicério, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 97).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0098',
    problem: 'Buraco na rua',
    registerDate: '2026-02-14T07:01:29Z',
    latitude: -21.4194,
    longitude: -48.5217,
    street: 'Rua Miguel Anselmo',
    description: 'Buraco na Rua Miguel Anselmo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 98).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0099',
    problem: 'Buraco na rua',
    registerDate: '2026-05-15T14:14:46Z',
    latitude: -21.4201,
    longitude: -48.5228,
    street: 'Rua Barão do Triunfo',
    description: 'Buraco na Rua Barão do Triunfo, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 99).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0100',
    problem: 'Buraco na rua',
    registerDate: '2026-08-16T21:27:03Z',
    latitude: -21.4208,
    longitude: -48.5059,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Conjunto Residencial Ipiranga, causando transtornos aos moradores e motoristas (registro 100).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000004', name: 'Conjunto Residencial Ipiranga', priority: 'ALTA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0101',
    problem: 'Buraco na rua',
    registerDate: '2026-01-17T04:40:20Z',
    latitude: -21.4215,
    longitude: -48.507,
    street: 'Avenida Doutor Thyrso Micali',
    description: 'Buraco na Avenida Doutor Thyrso Micali, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 101).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0102',
    problem: 'Buraco na rua',
    registerDate: '2026-04-18T11:53:37Z',
    latitude: -21.4222,
    longitude: -48.5081,
    street: 'Avenida Francisco de Mesquita',
    description: 'Buraco na Avenida Francisco de Mesquita, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 102).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0103',
    problem: 'Buraco na rua',
    registerDate: '2026-07-19T18:06:54Z',
    latitude: -21.4229,
    longitude: -48.5092,
    street: 'Avenida Herculano Rangel',
    description: 'Buraco na Avenida Herculano Rangel, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 103).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0104',
    problem: 'Buraco na rua',
    registerDate: '2026-10-20T01:19:11Z',
    latitude: -21.4056,
    longitude: -48.5103,
    street: 'Praça das Rosas',
    description: 'Buraco na Praça das Rosas, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 104).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0105',
    problem: 'Buraco na rua',
    registerDate: '2026-03-21T08:32:28Z',
    latitude: -21.4063,
    longitude: -48.5114,
    street: 'Rua Hermínio Piva',
    description: 'Buraco na Rua Hermínio Piva, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 105).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0106',
    problem: 'Buraco na rua',
    registerDate: '2026-06-22T15:45:45Z',
    latitude: -21.407,
    longitude: -48.5125,
    street: 'Rua Newton Prado',
    description: 'Buraco na Rua Newton Prado, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 106).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0107',
    problem: 'Buraco na rua',
    registerDate: '2026-09-23T22:58:02Z',
    latitude: -21.4077,
    longitude: -48.5136,
    street: 'Avenida Doutor Thyrso Micali',
    description: 'Buraco na Avenida Doutor Thyrso Micali, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 107).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0108',
    problem: 'Buraco na rua',
    registerDate: '2026-02-24T05:11:19Z',
    latitude: -21.4084,
    longitude: -48.5147,
    street: 'Avenida Francisco de Mesquita',
    description: 'Buraco na Avenida Francisco de Mesquita, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 108).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0109',
    problem: 'Buraco na rua',
    registerDate: '2026-05-25T12:24:36Z',
    latitude: -21.4091,
    longitude: -48.5158,
    street: 'Avenida Herculano Rangel',
    description: 'Buraco na Avenida Herculano Rangel, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 109).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0110',
    problem: 'Buraco na rua',
    registerDate: '2026-08-26T19:37:53Z',
    latitude: -21.4098,
    longitude: -48.5169,
    street: 'Praça das Rosas',
    description: 'Buraco na Praça das Rosas, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 110).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0111',
    problem: 'Buraco na rua',
    registerDate: '2026-01-27T02:50:10Z',
    latitude: -21.4105,
    longitude: -48.518,
    street: 'Rua Hermínio Piva',
    description: 'Buraco na Rua Hermínio Piva, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 111).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0112',
    problem: 'Buraco na rua',
    registerDate: '2026-04-28T09:03:27Z',
    latitude: -21.4112,
    longitude: -48.5191,
    street: 'Rua Newton Prado',
    description: 'Buraco na Rua Newton Prado, bairro Jardim Bela Vista, causando transtornos aos moradores e motoristas (registro 112).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000005', name: 'Jardim Bela Vista', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0113',
    problem: 'Buraco na rua',
    registerDate: '2026-07-01T16:16:44Z',
    latitude: -21.4119,
    longitude: -48.5202,
    street: 'Avenida Francisco Jodas Martins',
    description: 'Buraco na Avenida Francisco Jodas Martins, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 113).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0114',
    problem: 'Buraco na rua',
    registerDate: '2026-10-02T23:29:01Z',
    latitude: -21.4126,
    longitude: -48.5213,
    street: 'Avenida Elvira Rodolpho de Lucca',
    description: 'Buraco na Avenida Elvira Rodolpho de Lucca, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 114).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0115',
    problem: 'Buraco na rua',
    registerDate: '2026-03-03T06:42:18Z',
    latitude: -21.4133,
    longitude: -48.5224,
    street: 'Praça Guilherme Franco',
    description: 'Buraco na Praça Guilherme Franco, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 115).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0116',
    problem: 'Buraco na rua',
    registerDate: '2026-06-04T13:55:35Z',
    latitude: -21.414,
    longitude: -48.5055,
    street: 'Rua Siqueira Campos',
    description: 'Buraco na Rua Siqueira Campos, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 116).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0117',
    problem: 'Buraco na rua',
    registerDate: '2026-09-05T20:08:52Z',
    latitude: -21.4147,
    longitude: -48.5066,
    street: 'Rua da Liberdade',
    description: 'Buraco na Rua da Liberdade, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 117).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0118',
    problem: 'Buraco na rua',
    registerDate: '2026-02-06T03:21:09Z',
    latitude: -21.4154,
    longitude: -48.5077,
    street: 'Rua Castro Lima',
    description: 'Buraco na Rua Castro Lima, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 118).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0119',
    problem: 'Buraco na rua',
    registerDate: '2026-05-07T10:34:26Z',
    latitude: -21.4161,
    longitude: -48.5088,
    street: 'Avenida Francisco Jodas Martins',
    description: 'Buraco na Avenida Francisco Jodas Martins, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 119).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0120',
    problem: 'Buraco na rua',
    registerDate: '2026-08-08T17:47:43Z',
    latitude: -21.4168,
    longitude: -48.5099,
    street: 'Avenida Elvira Rodolpho de Lucca',
    description: 'Buraco na Avenida Elvira Rodolpho de Lucca, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 120).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0121',
    problem: 'Buraco na rua',
    registerDate: '2026-01-09T00:00:00Z',
    latitude: -21.4175,
    longitude: -48.511,
    street: 'Praça Guilherme Franco',
    description: 'Buraco na Praça Guilherme Franco, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 121).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0122',
    problem: 'Buraco na rua',
    registerDate: '2026-04-10T07:13:17Z',
    latitude: -21.4182,
    longitude: -48.5121,
    street: 'Rua Siqueira Campos',
    description: 'Buraco na Rua Siqueira Campos, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 122).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0123',
    problem: 'Buraco na rua',
    registerDate: '2026-07-11T14:26:34Z',
    latitude: -21.4189,
    longitude: -48.5132,
    street: 'Rua da Liberdade',
    description: 'Buraco na Rua da Liberdade, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 123).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0124',
    problem: 'Buraco na rua',
    registerDate: '2026-10-12T21:39:51Z',
    latitude: -21.4196,
    longitude: -48.5143,
    street: 'Rua Castro Lima',
    description: 'Buraco na Rua Castro Lima, bairro Doutor Adail Nunes da Silva, causando transtornos aos moradores e motoristas (registro 124).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000006', name: 'Doutor Adail Nunes da Silva', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0125',
    problem: 'Buraco na rua',
    registerDate: '2026-03-13T04:52:08Z',
    latitude: -21.4203,
    longitude: -48.5154,
    street: 'Avenida Edner Antônio Sendão Accorsi',
    description: 'Buraco na Avenida Edner Antônio Sendão Accorsi, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 125).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0126',
    problem: 'Buraco na rua',
    registerDate: '2026-06-14T11:05:25Z',
    latitude: -21.421,
    longitude: -48.5165,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 126).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0127',
    problem: 'Buraco na rua',
    registerDate: '2026-09-15T18:18:42Z',
    latitude: -21.4217,
    longitude: -48.5176,
    street: 'Praça José Pires de Goes',
    description: 'Buraco na Praça José Pires de Goes, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 127).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0128',
    problem: 'Buraco na rua',
    registerDate: '2026-02-16T01:31:59Z',
    latitude: -21.4224,
    longitude: -48.5187,
    street: 'Rua Joaquim Lourenço Sobrinho',
    description: 'Buraco na Rua Joaquim Lourenço Sobrinho, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 128).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0129',
    problem: 'Buraco na rua',
    registerDate: '2026-05-17T08:44:16Z',
    latitude: -21.4231,
    longitude: -48.5198,
    street: 'Rua Romeu Mársico',
    description: 'Buraco na Rua Romeu Mársico, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 129).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0130',
    problem: 'Buraco na rua',
    registerDate: '2026-08-18T15:57:33Z',
    latitude: -21.4058,
    longitude: -48.5209,
    street: 'Rua Joaquim Jerônimo',
    description: 'Buraco na Rua Joaquim Jerônimo, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 130).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0131',
    problem: 'Buraco na rua',
    registerDate: '2026-01-19T22:10:50Z',
    latitude: -21.4065,
    longitude: -48.522,
    street: 'Avenida Edner Antônio Sendão Accorsi',
    description: 'Buraco na Avenida Edner Antônio Sendão Accorsi, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 131).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0132',
    problem: 'Buraco na rua',
    registerDate: '2026-04-20T05:23:07Z',
    latitude: -21.4072,
    longitude: -48.5051,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 132).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0133',
    problem: 'Buraco na rua',
    registerDate: '2026-07-21T12:36:24Z',
    latitude: -21.4079,
    longitude: -48.5062,
    street: 'Praça José Pires de Goes',
    description: 'Buraco na Praça José Pires de Goes, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 133).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0134',
    problem: 'Buraco na rua',
    registerDate: '2026-10-22T19:49:41Z',
    latitude: -21.4086,
    longitude: -48.5073,
    street: 'Rua Joaquim Lourenço Sobrinho',
    description: 'Buraco na Rua Joaquim Lourenço Sobrinho, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 134).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0135',
    problem: 'Buraco na rua',
    registerDate: '2026-03-23T02:02:58Z',
    latitude: -21.4093,
    longitude: -48.5084,
    street: 'Rua Romeu Mársico',
    description: 'Buraco na Rua Romeu Mársico, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 135).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0136',
    problem: 'Buraco na rua',
    registerDate: '2026-06-24T09:15:15Z',
    latitude: -21.41,
    longitude: -48.5095,
    street: 'Rua Joaquim Jerônimo',
    description: 'Buraco na Rua Joaquim Jerônimo, bairro Jardim Contendas, causando transtornos aos moradores e motoristas (registro 136).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000007', name: 'Jardim Contendas', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0137',
    problem: 'Buraco na rua',
    registerDate: '2026-09-25T16:28:32Z',
    latitude: -21.4107,
    longitude: -48.5106,
    street: 'Avenida Doutor Thyrso Micali',
    description: 'Buraco na Avenida Doutor Thyrso Micali, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 137).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0138',
    problem: 'Buraco na rua',
    registerDate: '2026-02-26T23:41:49Z',
    latitude: -21.4114,
    longitude: -48.5117,
    street: 'Praça Senhora Novaes',
    description: 'Buraco na Praça Senhora Novaes, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 138).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0139',
    problem: 'Buraco na rua',
    registerDate: '2026-05-27T06:54:06Z',
    latitude: -21.4121,
    longitude: -48.5128,
    street: 'Rua Guerino Guerra',
    description: 'Buraco na Rua Guerino Guerra, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 139).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0140',
    problem: 'Buraco na rua',
    registerDate: '2026-08-28T13:07:23Z',
    latitude: -21.4128,
    longitude: -48.5139,
    street: 'Rua José Guerra',
    description: 'Buraco na Rua José Guerra, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 140).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0141',
    problem: 'Buraco na rua',
    registerDate: '2026-01-01T20:20:40Z',
    latitude: -21.4135,
    longitude: -48.515,
    street: 'Rua dos Domingues',
    description: 'Buraco na Rua dos Domingues, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 141).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0142',
    problem: 'Buraco na rua',
    registerDate: '2026-04-02T03:33:57Z',
    latitude: -21.4142,
    longitude: -48.5161,
    street: 'Rua Doutor Prudente de Morais',
    description: 'Buraco na Rua Doutor Prudente de Morais, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 142).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0143',
    problem: 'Buraco na rua',
    registerDate: '2026-07-03T10:46:14Z',
    latitude: -21.4149,
    longitude: -48.5172,
    street: 'Avenida Doutor Thyrso Micali',
    description: 'Buraco na Avenida Doutor Thyrso Micali, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 143).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0144',
    problem: 'Buraco na rua',
    registerDate: '2026-10-04T17:59:31Z',
    latitude: -21.4156,
    longitude: -48.5183,
    street: 'Praça Senhora Novaes',
    description: 'Buraco na Praça Senhora Novaes, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 144).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0145',
    problem: 'Buraco na rua',
    registerDate: '2026-03-05T00:12:48Z',
    latitude: -21.4163,
    longitude: -48.5194,
    street: 'Rua Guerino Guerra',
    description: 'Buraco na Rua Guerino Guerra, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 145).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0146',
    problem: 'Buraco na rua',
    registerDate: '2026-06-06T07:25:05Z',
    latitude: -21.417,
    longitude: -48.5205,
    street: 'Rua José Guerra',
    description: 'Buraco na Rua José Guerra, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 146).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0147',
    problem: 'Buraco na rua',
    registerDate: '2026-09-07T14:38:22Z',
    latitude: -21.4177,
    longitude: -48.5216,
    street: 'Rua dos Domingues',
    description: 'Buraco na Rua dos Domingues, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 147).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0148',
    problem: 'Buraco na rua',
    registerDate: '2026-02-08T21:51:39Z',
    latitude: -21.4184,
    longitude: -48.5227,
    street: 'Rua Doutor Prudente de Morais',
    description: 'Buraco na Rua Doutor Prudente de Morais, bairro Jardim São Luiz, causando transtornos aos moradores e motoristas (registro 148).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000008', name: 'Jardim São Luiz', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0149',
    problem: 'Buraco na rua',
    registerDate: '2026-05-09T04:04:56Z',
    latitude: -21.4191,
    longitude: -48.5058,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 149).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0150',
    problem: 'Buraco na rua',
    registerDate: '2026-08-10T11:17:13Z',
    latitude: -21.4198,
    longitude: -48.5069,
    street: 'Praça Tóquio',
    description: 'Buraco na Praça Tóquio, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 150).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0151',
    problem: 'Buraco na rua',
    registerDate: '2026-01-11T18:30:30Z',
    latitude: -21.4205,
    longitude: -48.508,
    street: 'Rua Visconde do Rio Branco',
    description: 'Buraco na Rua Visconde do Rio Branco, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 151).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0152',
    problem: 'Buraco na rua',
    registerDate: '2026-04-12T01:43:47Z',
    latitude: -21.4212,
    longitude: -48.5091,
    street: 'Rua Campos Salles',
    description: 'Buraco na Rua Campos Salles, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 152).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0153',
    problem: 'Buraco na rua',
    registerDate: '2026-07-13T08:56:04Z',
    latitude: -21.4219,
    longitude: -48.5102,
    street: 'Rua da República',
    description: 'Buraco na Rua da República, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 153).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0154',
    problem: 'Buraco na rua',
    registerDate: '2026-10-14T15:09:21Z',
    latitude: -21.4226,
    longitude: -48.5113,
    street: 'Rua São José',
    description: 'Buraco na Rua São José, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 154).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0155',
    problem: 'Buraco na rua',
    registerDate: '2026-03-15T22:22:38Z',
    latitude: -21.4233,
    longitude: -48.5124,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 155).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0156',
    problem: 'Buraco na rua',
    registerDate: '2026-06-16T05:35:55Z',
    latitude: -21.406,
    longitude: -48.5135,
    street: 'Praça Tóquio',
    description: 'Buraco na Praça Tóquio, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 156).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0157',
    problem: 'Buraco na rua',
    registerDate: '2026-09-17T12:48:12Z',
    latitude: -21.4067,
    longitude: -48.5146,
    street: 'Rua Visconde do Rio Branco',
    description: 'Buraco na Rua Visconde do Rio Branco, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 157).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0158',
    problem: 'Buraco na rua',
    registerDate: '2026-02-18T19:01:29Z',
    latitude: -21.4074,
    longitude: -48.5157,
    street: 'Rua Campos Salles',
    description: 'Buraco na Rua Campos Salles, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 158).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0159',
    problem: 'Buraco na rua',
    registerDate: '2026-05-19T02:14:46Z',
    latitude: -21.4081,
    longitude: -48.5168,
    street: 'Rua da República',
    description: 'Buraco na Rua da República, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 159).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0160',
    problem: 'Buraco na rua',
    registerDate: '2026-08-20T09:27:03Z',
    latitude: -21.4088,
    longitude: -48.5179,
    street: 'Rua São José',
    description: 'Buraco na Rua São José, bairro Jardim Santa Rita, causando transtornos aos moradores e motoristas (registro 160).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000009', name: 'Jardim Santa Rita', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0161',
    problem: 'Buraco na rua',
    registerDate: '2026-01-21T16:40:20Z',
    latitude: -21.4095,
    longitude: -48.519,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 161).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0162',
    problem: 'Buraco na rua',
    registerDate: '2026-04-22T23:53:37Z',
    latitude: -21.4102,
    longitude: -48.5201,
    street: 'Praça Antônio Ramos de Oliveira',
    description: 'Buraco na Praça Antônio Ramos de Oliveira, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 162).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0163',
    problem: 'Buraco na rua',
    registerDate: '2026-07-23T06:06:54Z',
    latitude: -21.4109,
    longitude: -48.5212,
    street: 'Rua Carlos Gomes',
    description: 'Buraco na Rua Carlos Gomes, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 163).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0164',
    problem: 'Buraco na rua',
    registerDate: '2026-10-24T13:19:11Z',
    latitude: -21.4116,
    longitude: -48.5223,
    street: 'Rua José Bonifácio',
    description: 'Buraco na Rua José Bonifácio, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 164).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0165',
    problem: 'Buraco na rua',
    registerDate: '2026-03-25T20:32:28Z',
    latitude: -21.4123,
    longitude: -48.5054,
    street: 'Rua Líbero Badaró',
    description: 'Buraco na Rua Líbero Badaró, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 165).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0166',
    problem: 'Buraco na rua',
    registerDate: '2026-06-26T03:45:45Z',
    latitude: -21.413,
    longitude: -48.5065,
    street: 'Rua Treze de Maio',
    description: 'Buraco na Rua Treze de Maio, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 166).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0167',
    problem: 'Buraco na rua',
    registerDate: '2026-09-27T10:58:02Z',
    latitude: -21.4137,
    longitude: -48.5076,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 167).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0168',
    problem: 'Buraco na rua',
    registerDate: '2026-02-28T17:11:19Z',
    latitude: -21.4144,
    longitude: -48.5087,
    street: 'Praça Antônio Ramos de Oliveira',
    description: 'Buraco na Praça Antônio Ramos de Oliveira, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 168).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0169',
    problem: 'Buraco na rua',
    registerDate: '2026-05-01T00:24:36Z',
    latitude: -21.4151,
    longitude: -48.5098,
    street: 'Rua Carlos Gomes',
    description: 'Buraco na Rua Carlos Gomes, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 169).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0170',
    problem: 'Buraco na rua',
    registerDate: '2026-08-02T07:37:53Z',
    latitude: -21.4158,
    longitude: -48.5109,
    street: 'Rua José Bonifácio',
    description: 'Buraco na Rua José Bonifácio, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 170).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0171',
    problem: 'Buraco na rua',
    registerDate: '2026-01-03T14:50:10Z',
    latitude: -21.4165,
    longitude: -48.512,
    street: 'Rua Líbero Badaró',
    description: 'Buraco na Rua Líbero Badaró, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 171).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0172',
    problem: 'Buraco na rua',
    registerDate: '2026-04-04T21:03:27Z',
    latitude: -21.4172,
    longitude: -48.5131,
    street: 'Rua Treze de Maio',
    description: 'Buraco na Rua Treze de Maio, bairro Jardim Santo Antônio, causando transtornos aos moradores e motoristas (registro 172).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000010', name: 'Jardim Santo Antônio', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0173',
    problem: 'Buraco na rua',
    registerDate: '2026-07-05T04:16:44Z',
    latitude: -21.4179,
    longitude: -48.5142,
    street: 'Avenida Francisco de Mesquita',
    description: 'Buraco na Avenida Francisco de Mesquita, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 173).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0174',
    problem: 'Buraco na rua',
    registerDate: '2026-10-06T11:29:01Z',
    latitude: -21.4186,
    longitude: -48.5153,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 174).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0175',
    problem: 'Buraco na rua',
    registerDate: '2026-03-07T18:42:18Z',
    latitude: -21.4193,
    longitude: -48.5164,
    street: 'Praça Doutor Aimone Salerno',
    description: 'Buraco na Praça Doutor Aimone Salerno, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 175).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0176',
    problem: 'Buraco na rua',
    registerDate: '2026-06-08T01:55:35Z',
    latitude: -21.42,
    longitude: -48.5175,
    street: 'Rua Newton Prado',
    description: 'Buraco na Rua Newton Prado, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 176).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0177',
    problem: 'Buraco na rua',
    registerDate: '2026-09-09T08:08:52Z',
    latitude: -21.4207,
    longitude: -48.5186,
    street: 'Rua Clineu Braga de Magalhães',
    description: 'Buraco na Rua Clineu Braga de Magalhães, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 177).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0178',
    problem: 'Buraco na rua',
    registerDate: '2026-02-10T15:21:09Z',
    latitude: -21.4214,
    longitude: -48.5197,
    street: 'Rua Bernardino Sampaio',
    description: 'Buraco na Rua Bernardino Sampaio, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 178).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0179',
    problem: 'Buraco na rua',
    registerDate: '2026-05-11T22:34:26Z',
    latitude: -21.4221,
    longitude: -48.5208,
    street: 'Avenida Francisco de Mesquita',
    description: 'Buraco na Avenida Francisco de Mesquita, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 179).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0180',
    problem: 'Buraco na rua',
    registerDate: '2026-08-12T05:47:43Z',
    latitude: -21.4228,
    longitude: -48.5219,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 180).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0181',
    problem: 'Buraco na rua',
    registerDate: '2026-01-13T12:00:00Z',
    latitude: -21.4055,
    longitude: -48.505,
    street: 'Praça Doutor Aimone Salerno',
    description: 'Buraco na Praça Doutor Aimone Salerno, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 181).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0182',
    problem: 'Buraco na rua',
    registerDate: '2026-04-14T19:13:17Z',
    latitude: -21.4062,
    longitude: -48.5061,
    street: 'Rua Newton Prado',
    description: 'Buraco na Rua Newton Prado, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 182).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0183',
    problem: 'Buraco na rua',
    registerDate: '2026-07-15T02:26:34Z',
    latitude: -21.4069,
    longitude: -48.5072,
    street: 'Rua Clineu Braga de Magalhães',
    description: 'Buraco na Rua Clineu Braga de Magalhães, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 183).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0184',
    problem: 'Buraco na rua',
    registerDate: '2026-10-16T09:39:51Z',
    latitude: -21.4076,
    longitude: -48.5083,
    street: 'Rua Bernardino Sampaio',
    description: 'Buraco na Rua Bernardino Sampaio, bairro Parque Residencial Laranjeiras I, causando transtornos aos moradores e motoristas (registro 184).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000011', name: 'Parque Residencial Laranjeiras I', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0185',
    problem: 'Buraco na rua',
    registerDate: '2026-03-17T16:52:08Z',
    latitude: -21.4083,
    longitude: -48.5094,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 185).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0186',
    problem: 'Buraco na rua',
    registerDate: '2026-06-18T23:05:25Z',
    latitude: -21.409,
    longitude: -48.5105,
    street: 'Avenida Heitor Alves Gomes',
    description: 'Buraco na Avenida Heitor Alves Gomes, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 186).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0187',
    problem: 'Buraco na rua',
    registerDate: '2026-09-19T06:18:42Z',
    latitude: -21.4097,
    longitude: -48.5116,
    street: 'Praça Doutor Waldemar D\'Ambrósio',
    description: 'Buraco na Praça Doutor Waldemar D\'Ambrósio, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 187).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0188',
    problem: 'Buraco na rua',
    registerDate: '2026-02-20T13:31:59Z',
    latitude: -21.4104,
    longitude: -48.5127,
    street: 'Rua Major Calderazzo',
    description: 'Buraco na Rua Major Calderazzo, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 188).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0189',
    problem: 'Buraco na rua',
    registerDate: '2026-05-21T20:44:16Z',
    latitude: -21.4111,
    longitude: -48.5138,
    street: 'Rua Santo Zorati',
    description: 'Buraco na Rua Santo Zorati, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 189).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0190',
    problem: 'Buraco na rua',
    registerDate: '2026-08-22T03:57:33Z',
    latitude: -21.4118,
    longitude: -48.5149,
    street: 'Rua General Glicério',
    description: 'Buraco na Rua General Glicério, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 190).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0191',
    problem: 'Buraco na rua',
    registerDate: '2026-01-23T10:10:50Z',
    latitude: -21.4125,
    longitude: -48.516,
    street: 'Avenida Frederico Dias Coelho',
    description: 'Buraco na Avenida Frederico Dias Coelho, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 191).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0192',
    problem: 'Buraco na rua',
    registerDate: '2026-04-24T17:23:07Z',
    latitude: -21.4132,
    longitude: -48.5171,
    street: 'Avenida Heitor Alves Gomes',
    description: 'Buraco na Avenida Heitor Alves Gomes, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 192).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0193',
    problem: 'Buraco na rua',
    registerDate: '2026-07-25T00:36:24Z',
    latitude: -21.4139,
    longitude: -48.5182,
    street: 'Praça Doutor Waldemar D\'Ambrósio',
    description: 'Buraco na Praça Doutor Waldemar D\'Ambrósio, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 193).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0194',
    problem: 'Buraco na rua',
    registerDate: '2026-10-26T07:49:41Z',
    latitude: -21.4146,
    longitude: -48.5193,
    street: 'Rua Major Calderazzo',
    description: 'Buraco na Rua Major Calderazzo, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 194).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0195',
    problem: 'Buraco na rua',
    registerDate: '2026-03-27T14:02:58Z',
    latitude: -21.4153,
    longitude: -48.5204,
    street: 'Rua Santo Zorati',
    description: 'Buraco na Rua Santo Zorati, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 195).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000115',
      phone: '(16) 98876-0115',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0196',
    problem: 'Buraco na rua',
    registerDate: '2026-06-28T21:15:15Z',
    latitude: -21.416,
    longitude: -48.5215,
    street: 'Rua General Glicério',
    description: 'Buraco na Rua General Glicério, bairro Parque Residencial Laranjeiras II, causando transtornos aos moradores e motoristas (registro 196).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000012', name: 'Parque Residencial Laranjeiras II', priority: 'MÉDIA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000116',
      phone: '(16) 98876-0116',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0197',
    problem: 'Buraco na rua',
    registerDate: '2026-09-01T04:28:32Z',
    latitude: -21.4167,
    longitude: -48.5226,
    street: 'Avenida Gagliano Francisco Pagliuso',
    description: 'Buraco na Avenida Gagliano Francisco Pagliuso, bairro Vila Rosa, causando transtornos aos moradores e motoristas (registro 197).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000013', name: 'Vila Rosa', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000117',
      phone: '(16) 98876-0117',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0198',
    problem: 'Buraco na rua',
    registerDate: '2026-02-02T11:41:49Z',
    latitude: -21.4174,
    longitude: -48.5057,
    street: 'Rua Rosa Martins',
    description: 'Buraco na Rua Rosa Martins, bairro Vila Rosa, causando transtornos aos moradores e motoristas (registro 198).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000013', name: 'Vila Rosa', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000118',
      phone: '(16) 98876-0118',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0199',
    problem: 'Buraco na rua',
    registerDate: '2026-05-03T18:54:06Z',
    latitude: -21.4181,
    longitude: -48.5068,
    street: 'Avenida João di Jorge',
    description: 'Buraco na Avenida João di Jorge, bairro Jardim Buscardi, causando transtornos aos moradores e motoristas (registro 199).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000014', name: 'Jardim Buscardi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000119',
      phone: '(16) 98876-0119',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0200',
    problem: 'Buraco na rua',
    registerDate: '2026-08-04T01:07:23Z',
    latitude: -21.4188,
    longitude: -48.5079,
    street: 'Avenida Elvira Rodolpho de Lucca',
    description: 'Buraco na Avenida Elvira Rodolpho de Lucca, bairro Jardim Buscardi, causando transtornos aos moradores e motoristas (registro 200).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000014', name: 'Jardim Buscardi', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000120',
      phone: '(16) 98876-0120',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0201',
    problem: 'Buraco na rua',
    registerDate: '2026-01-05T08:20:40Z',
    latitude: -21.4195,
    longitude: -48.509,
    street: 'Avenida Emílio Girotto',
    description: 'Buraco na Avenida Emílio Girotto, bairro Jardim Alvorada, causando transtornos aos moradores e motoristas (registro 201).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000015', name: 'Jardim Alvorada', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000101',
      phone: '(16) 98876-0101',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0202',
    problem: 'Buraco na rua',
    registerDate: '2026-04-06T15:33:57Z',
    latitude: -21.4202,
    longitude: -48.5101,
    street: 'Avenida Francisco Jodas Martins',
    description: 'Buraco na Avenida Francisco Jodas Martins, bairro Jardim Alvorada, causando transtornos aos moradores e motoristas (registro 202).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000015', name: 'Jardim Alvorada', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000102',
      phone: '(16) 98876-0102',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0203',
    problem: 'Buraco na rua',
    registerDate: '2026-07-07T22:46:14Z',
    latitude: -21.4209,
    longitude: -48.5112,
    street: 'Avenida Herculano Rangel',
    description: 'Buraco na Avenida Herculano Rangel, bairro Jardim Europa, causando transtornos aos moradores e motoristas (registro 203).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000016', name: 'Jardim Europa', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000103',
      phone: '(16) 98876-0103',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0204',
    problem: 'Buraco na rua',
    registerDate: '2026-10-08T05:59:31Z',
    latitude: -21.4216,
    longitude: -48.5123,
    street: 'Avenida Doutor Thyrso Micali',
    description: 'Buraco na Avenida Doutor Thyrso Micali, bairro Jardim Europa, causando transtornos aos moradores e motoristas (registro 204).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000016', name: 'Jardim Europa', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000104',
      phone: '(16) 98876-0104',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0205',
    problem: 'Buraco na rua',
    registerDate: '2026-03-09T12:12:48Z',
    latitude: -21.4223,
    longitude: -48.5134,
    street: 'Avenida Giorgio Stefanelli',
    description: 'Buraco na Avenida Giorgio Stefanelli, bairro Jardim dos Ipês, causando transtornos aos moradores e motoristas (registro 205).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000017', name: 'Jardim dos Ipês', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000105',
      phone: '(16) 98876-0105',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0206',
    problem: 'Buraco na rua',
    registerDate: '2026-06-10T19:25:05Z',
    latitude: -21.423,
    longitude: -48.5145,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim dos Ipês, causando transtornos aos moradores e motoristas (registro 206).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000017', name: 'Jardim dos Ipês', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000106',
      phone: '(16) 98876-0106',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0207',
    problem: 'Buraco na rua',
    registerDate: '2026-09-11T02:38:22Z',
    latitude: -21.4057,
    longitude: -48.5156,
    street: 'Avenida Paulo Roberto Scandar',
    description: 'Buraco na Avenida Paulo Roberto Scandar, bairro Vila Nova, causando transtornos aos moradores e motoristas (registro 207).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000018', name: 'Vila Nova', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000107',
      phone: '(16) 98876-0107',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0208',
    problem: 'Buraco na rua',
    registerDate: '2026-02-12T09:51:39Z',
    latitude: -21.4064,
    longitude: -48.5167,
    street: 'Avenida Vicente José Parise',
    description: 'Buraco na Avenida Vicente José Parise, bairro Vila Nova, causando transtornos aos moradores e motoristas (registro 208).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000018', name: 'Vila Nova', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000108',
      phone: '(16) 98876-0108',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0209',
    problem: 'Buraco na rua',
    registerDate: '2026-05-13T16:04:56Z',
    latitude: -21.4071,
    longitude: -48.5178,
    street: 'Avenida Emílio Calil',
    description: 'Buraco na Avenida Emílio Calil, bairro Vila Portuguesa, causando transtornos aos moradores e motoristas (registro 209).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000019', name: 'Vila Portuguesa', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000109',
      phone: '(16) 98876-0109',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-4.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0210',
    problem: 'Buraco na rua',
    registerDate: '2026-08-14T23:17:13Z',
    latitude: -21.4078,
    longitude: -48.5189,
    street: 'Avenida Francisco de Mesquita',
    description: 'Buraco na Avenida Francisco de Mesquita, bairro Quinta da Boa Vista, causando transtornos aos moradores e motoristas (registro 210).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000020', name: 'Quinta da Boa Vista', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000110',
      phone: '(16) 98876-0110',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-5.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0211',
    problem: 'Buraco na rua',
    registerDate: '2026-01-15T06:30:30Z',
    latitude: -21.4085,
    longitude: -48.52,
    street: 'Avenida Itaparica',
    description: 'Buraco na Avenida Itaparica, bairro Beira Rio, causando transtornos aos moradores e motoristas (registro 211).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000021', name: 'Beira Rio', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000111',
      phone: '(16) 98876-0111',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-1.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0212',
    problem: 'Buraco na rua',
    registerDate: '2026-04-16T13:43:47Z',
    latitude: -21.4092,
    longitude: -48.5211,
    street: 'Avenida Emílio Girotto',
    description: 'Buraco na Avenida Emílio Girotto, bairro Jardim Ribeirãozinho, causando transtornos aos moradores e motoristas (registro 212).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000022', name: 'Jardim Ribeirãozinho', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000112',
      phone: '(16) 98876-0112',
      role: 'CIDADÃO'
    },
    complaintStatus: 'EM ANDAMENTO',
    imagesPaths: ['/buraco-2.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0213',
    problem: 'Buraco na rua',
    registerDate: '2026-07-17T20:56:04Z',
    latitude: -21.4099,
    longitude: -48.5222,
    street: 'Avenida Ernesto Salvagni',
    description: 'Buraco na Avenida Ernesto Salvagni, bairro Jardim Sobral, causando transtornos aos moradores e motoristas (registro 213).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000023', name: 'Jardim Sobral', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000113',
      phone: '(16) 98876-0113',
      role: 'CIDADÃO'
    },
    complaintStatus: 'CONCLUÍDA',
    imagesPaths: ['/buraco-3.jpg']
  },
  {
    id: '3f2504e0-4f89-41d3-9a0c-0305e82c0214',
    problem: 'Buraco na rua',
    registerDate: '2026-10-18T03:09:21Z',
    latitude: -21.4106,
    longitude: -48.5053,
    street: 'Avenida Doutor Thyrso Micali',
    description: 'Buraco na Avenida Doutor Thyrso Micali, bairro Jardim Taquarão, causando transtornos aos moradores e motoristas (registro 214).',
    neighborhood: { id: '9a8b7c6d-5e4f-4a3b-8c2d-000000000024', name: 'Jardim Taquarão', priority: 'BAIXA' },
    user: {
      id: '1c2d3e4f-5a6b-4c7d-8e9f-000000000114',
      phone: '(16) 98876-0114',
      role: 'CIDADÃO'
    },
    complaintStatus: 'PENDENTE',
    imagesPaths: ['/buraco-4.jpg']
  }
];
