import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  areas = [
    {
      title: 'Direito de Família',
      description:
        'Atuação em processos de divórcio, guarda, pensão alimentícia, partilha de bens e regulamentação de visitas, sempre com sensibilidade e respeito à dignidade das partes envolvidas.',
    },
    {
      title: 'Direito Civil',
      description:
        'Consultoria e representação em questões patrimoniais, contratos, obrigações, responsabilidade civil e indenizações. Estratégia e técnica a favor da sua segurança jurídica.',
    },
    {
      title: 'Direito Ambiental',
      description:
        'Atuação especializada em temas de Direito Ambiental, assessorando pessoas físicas, empresas e produtores rurais em demandas preventivas e contenciosas.',
    },
    {
      title: 'Direito Empresarial',
      description:
        'Apoio jurídico completo para empreendedoras, profissionais autônomos e empresas: contratos, constituição de sociedades, recuperação de crédito e prevenção de litígios comerciais.',
    },
    {
      title: 'Direito Tributário',
      description:
        'Assessoria em questões fiscais, planejamento tributário, defesa em execuções fiscais e revisão de tributos indevidamente cobrados, sempre com foco na regularidade e economia.',
    },
    {
      title: 'Direito do Consumidor',
      description:
        'Defesa de direitos em casos de cobranças indevidas, contratos abusivos, negativa de planos de saúde, falhas na prestação de serviços e outros conflitos com fornecedores.',
    },
    {
      title: 'Contratos e Consultoria',
      description:
        'Elaboração, revisão e análise de contratos civis e empresariais. Consultoria jurídica para pessoas físicas, empreendedoras e empresas com foco em prevenção de litígios.',
    },
    {
      title: 'Área Previdenciária',
      description:
        'Informamos que o escritório não atua com causas relacionadas ao Direito Previdenciário.',
    },
  ];
}
