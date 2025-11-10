
import { Section } from '../types';

const SEBRAE_BLUE = '#0033A0';

export const touristData: { city: string, introduction: string, sections: Section[] } = {
  city: 'Cristino Castro',
  introduction: 'A elaboração do Inventário da Oferta Turística (INVTUR) visa elencar, para levantamento, registro e relatório, informações sobre infraestrutura, atrativos e equipamentos de apoio ao turismo para o planejamento, gestão e promoção da atividade turística da cidade de Cristino Castro.',
  sections: [
    {
      key: 'natural_attractions',
      title: 'Atrativos Naturais',
      items: [
        {
          name: 'Serra das Confusões',
          image: 'https://picsum.photos/800/600?random=1',
          description: 'O Parque Nacional das Serras das Confusões localiza-se no sudoeste do Piauí e abrange múltiplos municípios, oferecendo uma paisagem de tirar o fôlego com grutas e vegetação de Caatinga.',
          details: {
            'Localização': 'Zona rural, acesso pela Estrada de Japecanga em direção a Caracol.',
            'Funcionamento': 'Aberto ao público durante o ano todo. Visitação livre.',
            'Visitantes': 'Principais origens: Caracol, Guaribas, Bom Jesus.',
          }
        },
        {
          name: 'Piscina Natural - Hotel O Ney',
          image: 'https://picsum.photos/800/600?random=2',
          description: 'Uma piscina de águas naturais integrada a uma estrutura hoteleira, oferecendo lazer e conforto.',
          details: {
            'Localização': 'Br 135, S/N, KM 318 - Bairro Centro.',
            'Tipo': 'Privado, mas aberto ao público.',
            'Proximidades': 'Restaurantes, hotéis e posto de combustível.',
          }
        },
        {
          name: 'Rio Gurguéia',
          image: 'https://picsum.photos/800/600?random=3',
          description: 'Um importante rio da região, com belas paisagens e áreas de lazer em suas margens.',
          details: {
            'Localização': 'Zona rural, próximo ao centro da cidade.',
            'Acesso': 'Público e livre.',
          }
        },
      ]
    },
    {
      key: 'cultural_attractions',
      title: 'Atrativos Culturais e Artesanato',
      items: [
        {
          name: 'Cruz das Almas',
          image: 'https://picsum.photos/800/600?random=4',
          description: 'Monumento e espaço de devoção popular localizado na área urbana da cidade.',
          details: {
            'Localização': 'Br 135, Zona urbana.',
            'Visitação': 'Alta temporada em Julho, durante a Novena de Santo Antônio.',
            'Público': 'Principalmente fiéis da igreja católica.',
          }
        },
        {
          name: 'Reisado, Capoeira, Festas Juninas',
          image: 'https://picsum.photos/800/600?random=5',
          description: 'Manifestações culturais vibrantes da comunidade, especialmente na Várzea Grande. Inclui Reisado, Capoeira e a Junina Flor de Castro.',
          details: {
            'Temporada': 'Janeiro, Junho e Julho.',
            'Visitantes': 'Principalmente de municípios próximos.',
            'Contatos': 'Instagram: @Capoeira_palmares_, @Juninaflordecastrooficial',
          }
        },
        {
          name: 'Artesanato Local',
          image: 'https://picsum.photos/800/600?random=6',
          description: 'A cidade conta com diversos artesãos talentosos que produzem peças únicas.',
          details: {},
          subItems: [
            { name: 'Ana Quitéria Souza Reis', details: { 'Produtos': 'Bordados e bijuterias' } },
            { name: 'Eliezer Pereira Silva Júnior', details: { 'Produtos': 'Cerâmica, escultura e pintura' } },
            { name: 'Geusilaine Alves de Barros', details: { 'Produtos': 'Renda e pintura' } },
            { name: 'Antônio José Ribeiro', details: { 'Produtos': 'Escultura' } },
          ]
        },
      ]
    },
     {
      key: 'religious_attractions',
      title: 'Atrativos Religiosos',
      items: [
        {
          name: 'Morro da Santa',
          image: 'https://picsum.photos/800/600?random=7',
          description: 'Santuário de Nossa Senhora de Lourdes, um local de fé e peregrinação com uma vista panorâmica.',
          details: {
            'Localização': 'BR 135, saída de Bom Jesus em direção a Pantanal.',
            'Alta Temporada': 'Fevereiro, durante o Festejo de Nossa Senhora de Lourdes.',
            'Visitantes': 'Fiéis.',
          }
        },
        {
          name: 'Morro de Cristo',
          image: 'https://picsum.photos/800/600?random=8',
          description: 'Um morro com a imagem de Cristo, ponto de referência e devoção na cidade.',
          details: {
            'Localização': 'Localidade Estreito, saída da cidade em direção Alvorada do Gurguéia.',
            'Alta Temporada': 'Agosto.',
          }
        },
        {
          name: 'Paróquia Divino Salvador - Igreja Matriz',
          image: 'https://picsum.photos/800/600?random=9',
          description: 'A principal igreja da cidade, centro da vida religiosa da comunidade.',
          details: {
            'Localização': 'Rua Av. Marcos Parente, 763 - Bairro Centro.',
            'Alta Temporada': 'Julho e Agosto, durante os festejos do Senhor Bom Jesus da Lapa.',
            'Contato': 'Instagram: @Paroquiadivinosalvador',
          }
        },
      ]
    },
    {
        key: 'lodging',
        title: 'Serviços de Hospedagem',
        items: [
            { name: 'Gurguéia Park Hotel', description: 'Hotel com ampla estrutura, restaurante, piscinas e área de eventos.', details: { 'Localização': 'BR 135', 'Telefone': '(89) 98136-2000' } },
            { name: 'Hotel & Pousada Ferreira', description: 'Pousada urbana com foco em negócios e eventos.', details: { 'Localização': 'Avenida David Campos, SN', 'Telefone': '(89) 98113-7889' } },
            { name: 'Hotel e Pousada Recanto das Águas', description: 'Oferece restaurante, piscina e bar.', details: { 'Localização': 'Avenida David Campos', 'Telefone': '(89) 3563-1397' } },
            { name: 'Hotel O Ney', description: 'Hotel de trânsito com restaurante, piscinas e área verde.', details: { 'Localização': 'Avenida David Campos, SN', 'Telefone': '(89) 99979-5338' } },
            { name: 'Pousada e Restaurante Mangueirão', description: 'Pousada com restaurante e área verde.', details: { 'Localização': 'BR 135, Avenida David Campos', 'Telefone': '(89) 98123-2787' } },
            { name: 'Pousada Sítio Dhelta', description: 'Pousada com chalés, restaurante, parque infantil e piscina.', details: { 'Localização': 'BR 135, 2140', 'Contato': '(89) 98102-2949' } },
        ]
    },
    {
        key: 'food_drink',
        title: 'Alimentos e Bebidas',
        items: [
            { name: 'Bode Assado da Família Lacerda', image: 'https://picsum.photos/800/600?random=10', description: 'Prato tradicional feito há mais de 20 anos, servido com feijão tropeiro e mandioca frita no restaurante Dhelta.', details: { 'Localização': 'BR 135' } },
            { name: 'Açaí Store', description: 'Sorveteria e açaiteria no centro da cidade.', details: { 'Localização': 'Avenida David Campos, S/N, Centro' } },
            { name: 'Boteco Dallas', description: 'Restaurante e bar com música ao vivo.', details: { 'Localização': 'BR 135, Clube Central do Forró' } },
            { name: 'Casa do Petisco', description: 'Restaurante de comida nordestina e churrascaria.', details: { 'Localização': 'Rua Rui Barbosa, 239' } },
            { name: 'Gurguéia Park Hotel (Restaurante)', description: 'Restaurante aberto ao público com comida nordestina, churrascaria e hamburgueria.', details: { 'Localização': 'BR 135' } },
            { name: 'Restaurante Pantanal', description: 'Restaurante e bar na zona rural.', details: { 'Localização': 'BR 135' } },
            { name: 'Piscina e Restaurante Sérgio Reis', description: 'Restaurante com música ao vivo e área de lazer.', details: { 'Localização': 'Av David Campos' } },
        ]
    },
    {
        key: 'leisure_events',
        title: 'Lazer e Eventos',
        items: [
            { name: 'Praça Cristino Castro', description: 'Praça central com o monumento do industrial Cristino Raimundo de Castro.', details: { 'Localização': 'Av Marcos Parente' } },
            { name: 'Praça Tomé Augusto Campos (Praça dos Paraibanos)', description: 'Praça com fonte luminosa, espaço para festas e eventos.', details: { 'Localização': 'Av David Campos' } },
            { name: 'Arena Sunset', description: 'Quadra de Beach Tênis com espaço para eventos.', details: { 'Localização': 'Rua Projetada, S/N, Centro' } },
            { name: 'Gurgueia Beach Club', description: 'Quadra de Beach Tênis com espaço para eventos.', details: { 'Localização': 'Rua João Dias, Centro' } },
            { name: 'Feira de Agricultor', description: 'Acontece duas vezes ao ano, com venda de produtos e serviços locais.', details: { 'Localização': 'Rua Marcos parentes, Bairro Centro' } },
            { name: 'Arraiá Municipal', description: 'Festa junina com competição de quadrilhas, comidas típicas e manifestações culturais.', details: { 'Data': 'Final de semana no mês de junho' } },
            { name: 'Aniversário da Cidade', description: 'Celebração da Emancipação Política com desfile, shows, ciclismo e corrida.', details: { 'Data': 'Outubro' } },
        ]
    },
    {
        key: 'support_services',
        title: 'Serviços de Apoio',
        items: [
            { name: 'Rodoviária da Cidade', image: 'https://picsum.photos/800/600?random=11', description: 'Terminal Rodoviário Teresa Falcão, ponto de partida e chegada para diversas localidades.', details: { 'Localização': 'BR 135, Saída da cidade sentido norte' } },
            { name: 'Agências de Viagem', description: 'Empresas de transporte terrestre operando na rodoviária.', details: {}, subItems: [
                { name: 'Costa Turismo', details: { 'Destino Principal': 'Goiânia' } },
                { name: 'Guanabara', details: { 'Destinos': 'Brasília, Goiânia, São Paulo' } },
                { name: 'Princesa do Sul', details: { 'Destinos': 'Floriano, Parnaíba, Brasília' } },
                { name: 'Real Maia', details: { 'Destinos': 'Teresina, Brasília, Goiânia' } },
                { name: 'Transpiauí', details: { 'Destinos': 'Parnaíba, Floriano, Brasília' } },
            ]},
            { name: 'Transportadoras Turísticas', description: 'Serviços de transporte local e interestadual.', details: {}, subItems: [
                { name: 'Gurgueia Turismo', details: { 'Abrangência': 'Municipal; Interestadual' } },
                { name: 'RM Transporte e Turismo LTDA', details: { 'Abrangência': 'Municipal; Intermunicipal estadual; Interestadual' } },
            ]},
            { name: 'Bancos e Serviços Financeiros', description: 'Principais serviços bancários disponíveis na cidade.', details: {}, subItems: [
                { name: 'Banco do Brasil', details: { 'Endereço': 'AV MARCOS PARENTE' } },
                { name: 'Lotérica', details: { 'Endereço': 'AV DAVID CAMPOS' } },
                { name: 'Posto de Atendimento Bradesco', details: { 'Endereço': 'AV DAVID CAMPOS' } },
            ]}
        ]
    }
  ]
};
