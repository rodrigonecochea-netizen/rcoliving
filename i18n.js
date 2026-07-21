const RCO_I18N = (() => {
  const dict = {
    es: {
      enter:"INGRESAR", enterAria:"Ingresar al Centro de Atención de RCO Living",
      center:"Centro de Atención", accessTitle:"¿Cómo desea solicitar el servicio?",
      accessLead:"Los clientes registrados acceden a sus propiedades y datos guardados. Los clientes ocasionales pueden solicitar una atención sin registro previo.",
      registeredTitle:"Ya soy cliente de RCO Living", registeredText:"Tengo un número de cliente y quiero solicitar mantenimiento para una propiedad registrada.", registeredButton:"Ingresar como cliente",
      occasionalTitle:"Necesito un servicio ocasional", occasionalText:"Quiero solicitar un servicio puntual y todavía no poseo un número de cliente RCO Living.", occasionalButton:"Solicitar servicio",
      registered:"Cliente registrado", loginTitle:"Ingrese sus datos de acceso", clientNumber:"Número de cliente", verifyPhone:"WhatsApp de verificación", verify:"Verificar cliente",
      demo:"Acceso de prueba", welcomeBack:"Bienvenido nuevamente", chooseProperty:"Seleccione la propiedad donde necesita asistencia.", continue:"Continuar",
      occasional:"Servicio ocasional", applicantData:"Datos del solicitante", applicantLead:"Complete sus datos una sola vez. Después continuará con el servicio, fotografías y agenda.",
      fullName:"Nombre y apellido", phone:"WhatsApp", address:"Dirección completa", unit:"Unidad / departamento", email:"Correo electrónico",
      reception:"Recepción de servicios", tellUs:"Cuéntenos qué necesita", service:"Servicio", issue:"Inconveniente", description:"Descripción", photos:"Fotografías",
      agenda:"Agenda", date:"Día solicitado", shift:"Turno preferido", morning:"Mañana", afternoon:"Tarde", priority:"Prioridad",
      scheduled:"Programado", priorityFast:"Prioritario", urgent:"Urgente", submit:"Registrar solicitud", requestSaved:"Solicitud registrada",
      organizing:"Ya estamos organizando su atención.", trackingText:"Su número de seguimiento es:", sendWA:"Enviar comprobante por WhatsApp",
      operations:"Centro de Control", dashboardTitle:"Operación de hoy", dashboardLead:"Vista demostrativa del sistema interno de RCO Living.",
      clients:"Clientes", properties:"Propiedades", technicians:"Técnicos", vehicles:"Vehículos", equipment:"Equipos", requests:"Solicitudes",
      dossier:"Expediente digital", history:"Historial", documents:"Documentos", keys:"Llaves", inventory:"Inventario", expenses:"Gastos",
      noRisk:"Sin riesgo inmediato.", fastAttention:"Requiere atención rápida.", risk:"Riesgo eléctrico, pérdida importante o daño creciente."
    },
    pt: {
      enter:"ENTRAR", enterAria:"Entrar no Centro de Atendimento da RCO Living",
      center:"Centro de Atendimento", accessTitle:"Como deseja solicitar o serviço?",
      accessLead:"Clientes cadastrados acessam seus imóveis e dados salvos. Clientes ocasionais podem solicitar atendimento sem cadastro prévio.",
      registeredTitle:"Já sou cliente da RCO Living", registeredText:"Tenho um número de cliente e quero solicitar manutenção para um imóvel cadastrado.", registeredButton:"Entrar como cliente",
      occasionalTitle:"Preciso de um serviço ocasional", occasionalText:"Quero solicitar um serviço pontual e ainda não possuo número de cliente RCO Living.", occasionalButton:"Solicitar serviço",
      registered:"Cliente cadastrado", loginTitle:"Informe seus dados de acesso", clientNumber:"Número do cliente", verifyPhone:"WhatsApp de verificação", verify:"Verificar cliente",
      demo:"Acesso de teste", welcomeBack:"Bem-vindo novamente", chooseProperty:"Selecione o imóvel onde precisa de atendimento.", continue:"Continuar",
      occasional:"Serviço ocasional", applicantData:"Dados do solicitante", applicantLead:"Preencha seus dados uma única vez. Depois, continue com o serviço, fotos e agendamento.",
      fullName:"Nome completo", phone:"WhatsApp", address:"Endereço completo", unit:"Unidade / apartamento", email:"E-mail",
      reception:"Recepção de serviços", tellUs:"Conte-nos o que precisa", service:"Serviço", issue:"Problema", description:"Descrição", photos:"Fotografias",
      agenda:"Agendamento", date:"Dia solicitado", shift:"Período preferido", morning:"Manhã", afternoon:"Tarde", priority:"Prioridade",
      scheduled:"Programado", priorityFast:"Prioritário", urgent:"Urgente", submit:"Registrar solicitação", requestSaved:"Solicitação registrada",
      organizing:"Já estamos organizando seu atendimento.", trackingText:"Seu número de acompanhamento é:", sendWA:"Enviar comprovante pelo WhatsApp",
      operations:"Centro de Controle", dashboardTitle:"Operação de hoje", dashboardLead:"Visão demonstrativa do sistema interno da RCO Living.",
      clients:"Clientes", properties:"Imóveis", technicians:"Técnicos", vehicles:"Veículos", equipment:"Equipamentos", requests:"Solicitações",
      dossier:"Dossiê digital", history:"Histórico", documents:"Documentos", keys:"Chaves", inventory:"Inventário", expenses:"Despesas",
      noRisk:"Sem risco imediato.", fastAttention:"Requer atendimento rápido.", risk:"Risco elétrico, grande vazamento ou dano crescente."
    },
    en: {
      enter:"ENTER", enterAria:"Enter the RCO Living Service Center",
      center:"Service Center", accessTitle:"How would you like to request service?",
      accessLead:"Registered clients can access saved properties and information. Occasional clients can request service without prior registration.",
      registeredTitle:"I am already an RCO Living client", registeredText:"I have a client number and need maintenance for a registered property.", registeredButton:"Client access",
      occasionalTitle:"I need an occasional service", occasionalText:"I need a one-time service and do not yet have an RCO Living client number.", occasionalButton:"Request service",
      registered:"Registered client", loginTitle:"Enter your access information", clientNumber:"Client number", verifyPhone:"Verification WhatsApp", verify:"Verify client",
      demo:"Demo access", welcomeBack:"Welcome back", chooseProperty:"Select the property that needs assistance.", continue:"Continue",
      occasional:"Occasional service", applicantData:"Applicant information", applicantLead:"Enter your information once. Then continue to service, photos and scheduling.",
      fullName:"Full name", phone:"WhatsApp", address:"Full address", unit:"Unit / apartment", email:"Email",
      reception:"Service reception", tellUs:"Tell us what you need", service:"Service", issue:"Issue", description:"Description", photos:"Photos",
      agenda:"Schedule", date:"Requested date", shift:"Preferred shift", morning:"Morning", afternoon:"Afternoon", priority:"Priority",
      scheduled:"Scheduled", priorityFast:"Priority", urgent:"Urgent", submit:"Register request", requestSaved:"Request registered",
      organizing:"We are already organizing your service.", trackingText:"Your tracking number is:", sendWA:"Send receipt by WhatsApp",
      operations:"Control Center", dashboardTitle:"Today's operation", dashboardLead:"Demonstration view of the RCO Living internal system.",
      clients:"Clients", properties:"Properties", technicians:"Technicians", vehicles:"Vehicles", equipment:"Equipment", requests:"Requests",
      dossier:"Digital property file", history:"History", documents:"Documents", keys:"Keys", inventory:"Inventory", expenses:"Expenses",
      noRisk:"No immediate risk.", fastAttention:"Requires fast attention.", risk:"Electrical risk, major leak or escalating damage."
    }
  };
  function browserLang(){
    const l=(navigator.language||'pt').toLowerCase();
    if(l.startsWith('pt'))return 'pt'; if(l.startsWith('es'))return 'es'; return 'en';
  }
  function current(){return localStorage.getItem('rco_lang')||browserLang()}
  function apply(lang=current()){
    localStorage.setItem('rco_lang',lang); document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[lang][k])el.textContent=dict[lang][k]});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(dict[lang][k])el.placeholder=dict[lang][k]});
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const k=el.dataset.i18nAria;if(dict[lang][k])el.setAttribute('aria-label',dict[lang][k])});
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    window.dispatchEvent(new CustomEvent('rco-language',{detail:{lang,dict:dict[lang]}}));
  }
  function init(){
    document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.lang)));
    apply();
  }
  return {init,apply,current,dict};
})();