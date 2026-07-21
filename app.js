(() => {
  const form = document.getElementById('requestForm');
  const steps = [...document.querySelectorAll('.step')];
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const submitBtn = document.getElementById('submitBtn');
  const stepText = document.getElementById('stepText');
  const stepName = document.getElementById('stepName');
  const progressBar = document.getElementById('progressBar');
  const formMessage = document.getElementById('formMessage');
  const urgentNotice = document.getElementById('urgentNotice');
  const review = document.getElementById('review');
  const modal = document.getElementById('successModal');
  const trackingNumber = document.getElementById('trackingNumber');
  const successSummary = document.getElementById('successSummary');
  const whatsappConfirm = document.getElementById('whatsappConfirm');
  const newRequest = document.getElementById('newRequest');
  const visitDate = document.getElementById('visitDate');
  const photoNames = document.getElementById('photoNames');
  const photos = document.getElementById('photos');

  let current = 0;
  const names = ['Servicio', 'Datos', 'Inconveniente', 'Agenda', 'Confirmación'];

  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  visitDate.min = today.toISOString().split('T')[0];

  const params = new URLSearchParams(location.search);
  const property = params.get('propiedad');
  if (property) document.getElementById('propertyCode').value = property;

  if (window.QRCode) {
    const cleanUrl = `${location.origin}${location.pathname}#solicitud`;
    new QRCode(document.getElementById('qr'), {
      text: cleanUrl,
      width: 130,
      height: 130,
      colorDark: '#0b0d10',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    document.getElementById('qr').textContent = 'QR';
  }

  photos.addEventListener('change', () => {
    const files = [...photos.files];
    photoNames.textContent = files.length
      ? `${files.length} archivo${files.length > 1 ? 's' : ''}: ${files.map(f => f.name).join(', ')}`
      : '';
  });

  document.querySelectorAll('input[name="priority"]').forEach(input => {
    input.addEventListener('change', () => {
      urgentNotice.hidden = input.value !== 'Urgente' || !input.checked;
    });
  });

  function fieldValue(name) {
    const field = form.elements[name];
    if (!field) return '';
    if (field instanceof RadioNodeList) return field.value;
    return field.value.trim();
  }

  function validateStep(index) {
    formMessage.textContent = '';
    const required = [...steps[index].querySelectorAll('[required]')];
    for (const input of required) {
      if (input.type === 'radio') {
        const selected = form.querySelector(`input[name="${input.name}"]:checked`);
        if (!selected) {
          formMessage.textContent = 'Seleccione una opción para continuar.';
          return false;
        }
      } else if (input.type === 'checkbox') {
        if (!input.checked) {
          formMessage.textContent = 'Debe aceptar la autorización para enviar la solicitud.';
          return false;
        }
      } else if (!input.value.trim()) {
        input.focus();
        formMessage.textContent = 'Complete los campos obligatorios para continuar.';
        return false;
      }
    }
    return true;
  }

  function renderReview() {
    const data = {
      Servicio: fieldValue('service'),
      Cliente: fieldValue('name'),
      WhatsApp: fieldValue('phone'),
      Propiedad: [fieldValue('address'), fieldValue('unit')].filter(Boolean).join(' · '),
      'Código de propiedad': fieldValue('propertyCode') || 'Sin código',
      Inconveniente: fieldValue('description'),
      Visita: `${formatDate(fieldValue('visitDate'))} · Turno ${fieldValue('shift')}`,
      Prioridad: fieldValue('priority'),
      Fotografías: photos.files.length ? `${photos.files.length} archivo(s)` : 'Sin fotografías'
    };
    review.innerHTML = Object.entries(data).map(([key, value]) =>
      `<div class="review-item ${key === 'Inconveniente' ? 'full' : ''}">
         <small>${escapeHtml(key)}</small>
         <strong>${escapeHtml(value || '—')}</strong>
       </div>`
    ).join('');
  }

  function update() {
    steps.forEach((step, i) => step.classList.toggle('active', i === current));
    stepText.textContent = `Paso ${current + 1} de ${steps.length}`;
    stepName.textContent = names[current];
    progressBar.style.width = `${((current + 1) / steps.length) * 100}%`;
    prevBtn.hidden = current === 0;
    nextBtn.hidden = current === steps.length - 1;
    submitBtn.hidden = current !== steps.length - 1;
    formMessage.textContent = '';
    if (current === steps.length - 1) renderReview();
    document.getElementById('solicitud').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  nextBtn.addEventListener('click', () => {
    if (!validateStep(current)) return;
    current++;
    update();
  });

  prevBtn.addEventListener('click', () => {
    current--;
    update();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateStep(current)) return;

    let sequence = Number(localStorage.getItem('rco_mt_sequence') || '10000') + 1;
    localStorage.setItem('rco_mt_sequence', String(sequence));
    const tracking = `RCO-MT-${sequence}`;

    const summaryText = [
      `<strong>${escapeHtml(fieldValue('service'))}</strong>`,
      `${escapeHtml(formatDate(fieldValue('visitDate')))} · Turno ${escapeHtml(fieldValue('shift'))}`,
      `Prioridad: ${escapeHtml(fieldValue('priority'))}`,
      `${escapeHtml(fieldValue('address'))}${fieldValue('unit') ? ` · ${escapeHtml(fieldValue('unit'))}` : ''}`
    ].join('<br>');

    trackingNumber.textContent = tracking;
    successSummary.innerHTML = summaryText;

    const waText = [
      `Hola RCO Living. Mi solicitud fue registrada.`,
      `Número: ${tracking}`,
      `Servicio: ${fieldValue('service')}`,
      `Fecha solicitada: ${formatDate(fieldValue('visitDate'))}`,
      `Turno: ${fieldValue('shift')}`,
      `Prioridad: ${fieldValue('priority')}`,
      `Dirección: ${fieldValue('address')}`,
      fieldValue('unit') ? `Unidad: ${fieldValue('unit')}` : ''
    ].filter(Boolean).join('\n');

    whatsappConfirm.href = `https://wa.me/5581998991468?text=${encodeURIComponent(waText)}`;
    modal.hidden = false;

    const saved = JSON.parse(localStorage.getItem('rco_requests') || '[]');
    saved.unshift({
      tracking,
      createdAt: new Date().toISOString(),
      service: fieldValue('service'),
      name: fieldValue('name'),
      phone: fieldValue('phone'),
      address: fieldValue('address'),
      unit: fieldValue('unit'),
      propertyCode: fieldValue('propertyCode'),
      description: fieldValue('description'),
      visitDate: fieldValue('visitDate'),
      shift: fieldValue('shift'),
      priority: fieldValue('priority'),
      status: 'Recibida'
    });
    localStorage.setItem('rco_requests', JSON.stringify(saved.slice(0, 200)));
  });

  newRequest.addEventListener('click', () => {
    modal.hidden = true;
    form.reset();
    if (property) document.getElementById('propertyCode').value = property;
    photoNames.textContent = '';
    urgentNotice.hidden = true;
    current = 0;
    update();
  });

  function formatDate(value) {
    if (!value) return 'Sin fecha';
    const [y,m,d] = value.split('-').map(Number);
    return new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })
      .format(new Date(y, m - 1, d));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
    }[char]));
  }

  update();
})();
