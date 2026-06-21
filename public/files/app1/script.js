// ==========================================
// 1. الخريطة التفاعلية البصرية (جلب البيانات الخارجية عبر الإنترنت)
// ==========================================
let map;

document.addEventListener('DOMContentLoaded', () => {
    // التحقق من وجود حاوية الخريطة قبل التأسيس
    if (document.getElementById('map')) {
        // إنشاء الخريطة وتوسيطها على إحداثيات العراق الجغرافية
        map = L.map('map').setView([33.3152, 44.3661], 6);

        // تحميل طبقات الخرائط أونلاين من OpenStreetMap المفتوحة
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // مصفوفة مواقع المدن لإسقاط العلامات الجغرافية
        const cities = [
            { id: "baghdad", name: "بغداد (العاصمة)", coords: [33.3152, 44.3661] },
            { id: "basra", name: "البصرة", coords: [30.5081, 47.7835] },
            { id: "erbil", name: "أربيل", coords: [36.1911, 44.0094] }
        ];

        cities.forEach(city => {
            const marker = L.marker(city.coords).addTo(map);
            marker.bindTooltip(city.name, { permanent: false, direction: "top" });
            
            // جلب البيانات عند النقر
            marker.on('click', () => {
                fetchCityDataFromExternalSource(city.id);
            });
        });
    }
});

async function fetchCityDataFromExternalSource(cityId) {
    const container = document.getElementById("cityContent");
    if (!container) return;

    try {
        const response = await fetch('data.json'); 
        
        if (!response.ok) {
            throw new Error('فشل نظام الاتصال الخارجي بالبيانات');
        }

        const geoData = await response.json();

        if (geoData[cityId]) {
            const data = geoData[cityId];
            
            container.innerHTML = `
                <div class="col-12 mb-2 mt-4">
                    <div class="alert alert-primary text-center fw-bold fs-5 shadow-sm border-0">
                         بيانات محافظة: ${data.title}
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 border rounded bg-white h-100 shadow-sm border-start border-primary border-4">
                        <h5 class="text-primary fw-bold"><i class="bi bi-cloud-sun"></i> المناخ السائد</h5>
                        <p class="text-secondary">${data.climate}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 border rounded bg-white h-100 shadow-sm border-start border-success border-4">
                        <h5 class="text-success fw-bold"><i class="bi bi-people"></i> الخصائص السكانية</h5>
                        <p class="text-secondary">${data.population}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 border rounded bg-white h-100 shadow-sm border-start border-warning border-4">
                        <h5 class="text-warning fw-bold"><i class="bi bi-gear"></i> الموارد الاقتصادية</h5>
                        <p class="text-secondary">${data.resources}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 border rounded bg-white h-100 shadow-sm border-start border-danger border-4">
                        <h5 class="text-danger fw-bold"><i class="bi bi-exclamation-triangle"></i> المشكلات البيئية</h5>
                        <p class="text-secondary">${data.problems}</p>
                    </div>
                </div>
            `;
            container.classList.remove("d-none");
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    } catch (error) {
        console.error("خطأ في معالجة طلب البيانات:", error);
        container.innerHTML = `
            <div class="col-12 mt-4">
                <div class="alert alert-danger text-center shadow-sm border-0 fw-bold">
                    عذراً، فشل النظام في جلب البيانات من ملف data.json الخارجي. يرجى التأكد من تشغيل المشروع عبر بيئة خادم (Server).
                </div>
            </div>`;
        container.classList.remove("d-none");
    }
}

// ==========================================
// 2. حل المشكلات الجغرافية (التقويم والتحليل)
// ==========================================
function analyzeProblem() {
    const checkboxes = document.querySelectorAll('.problem-chk');
    let hasSustainable = false;
    let hasEcological = false;
    let hasShortTerm = false;

    checkboxes.forEach(chk => {
        if (chk.checked) {
            if (chk.value === "sustainable") hasSustainable = true;
            if (chk.value === "ecological") hasEcological = true;
            if (chk.value === "short-term") hasShortTerm = true;
        }
    });

    const resultDiv = document.getElementById("problemResult");
    let feedback = "";

    if (hasSustainable && hasEcological && !hasShortTerm) {
        feedback = `<h4 class="text-success fw-bold">تقييم ممتاز: تفكير استراتيجي مستدام</h4>
                    <p class="text-dark mt-3">لقد وازنت بنجاح بين الأمن المائي والأمن البيئي. استبعادك للاستنزاف الجوفي العشوائي يعكس فهماً عميقاً لهشاشة النظام الهيدرولوجي.</p>
                    <div class="alert alert-success mt-3 border-start border-4 border-success bg-white shadow-sm">
                        <strong>مؤشر الأداء:</strong> مستوى التقويم والابتكار (مرتفع جداً).
                    </div>`;
    } else if (hasShortTerm) {
        feedback = `<h4 class="text-warning fw-bold">تحذير بيئي: حلول استنزافية</h4>
                    <p class="text-dark mt-3">الاعتماد المكثف على المياه الجوفية سيؤدي إلى انخفاض منسوب الماء الباطني وتملح التربة المتبقية، مما يحول المشكلة المؤقتة إلى كارثة بيئية دائمة.</p>
                    <div class="alert alert-warning mt-3 border-start border-4 border-warning bg-white shadow-sm">
                        <strong>التوصية:</strong> راجع مفاهيم الاستدامة المائية والتأثير البيئي.
                    </div>`;
    } else if (hasSustainable || hasEcological) {
        feedback = `<h4 class="text-info fw-bold">تحليل جزئي</h4>
                    <p class="text-dark mt-3">خطوة في الاتجاه الصحيح، لكن المشكلات الجغرافية المعقدة تتطلب "حزمة متكاملة" من الحلول الهندسية والبيولوجية معاً.</p>`;
    } else {
        feedback = `<h4 class="text-danger fw-bold">لم يتم اتخاذ إجراء</h4>
                    <p class="text-muted mt-3">التقاعس عن اتخاذ سياسات سيفاقم معدلات التصحر ويهدد الأمن الغذائي.</p>`;
    }

    resultDiv.innerHTML = feedback;
}

// ==========================================
// 3. الاختبار التفاعلي (التقويم التكويني)
// ==========================================
const quizQuestions = [
    {
        q: "أي المظاهر التضاريسية الآتية تغطي مساحة واسعة من غرب وجنوب غرب العراق؟",
        options: ["المنطقة الجبلية", "الهضبة الغربية", "السهل الرسوبي", "المنطقة المتموجة"],
        answer: 1
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const qText = document.getElementById('questionText');
    const ansBox = document.getElementById('answersBox');
    
    if(qText && ansBox) {
        qText.textContent = quizQuestions[0].q;
        quizQuestions[0].options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = "btn btn-outline-primary py-2 fw-bold";
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(index, quizQuestions[0].answer);
            ansBox.appendChild(btn);
        });
    }
});

function checkAnswer(selected, correct) {
    const feedback = document.getElementById('quizFeedback');
    if(selected === correct) {
        feedback.innerHTML = "<i class='bi bi-check-circle-fill'></i> إجابة صحيحة! الهضبة الغربية تشكل امتداداً لبادية الشام وتتسم بجفافها.";
        feedback.className = "text-success fw-bold fs-5 mt-4 text-center";
    } else {
        feedback.innerHTML = "<i class='bi bi-x-circle-fill'></i> إجابة غير دقيقة. تذكر المناطق التضاريسية الصحراوية جهة الغرب.";
        feedback.className = "text-danger fw-bold fs-5 mt-4 text-center";
    }
}

// ==========================================
// 4. لوحة المناخ الرقمية (تفسير البيانات)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('climateChart');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['بغداد', 'البصرة', 'الموصل', 'الرطبة'],
                datasets: [
                    {
                        label: 'متوسط حرارة الصيف (مئوية)',
                        data: [44, 47, 40, 39],
                        backgroundColor: 'rgba(255, 99, 132, 0.8)',
                        borderRadius: 4
                    },
                    {
                        label: 'معدل الأمطار السنوي (ملم)',
                        data: [150, 140, 375, 115],
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        borderRadius: 4
                    },
                    {
                        type: 'line',
                        label: 'معدل التبخر السنوي المقدر (ملم)',
                        data: [2000, 2400, 1500, 2200],
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: { mode: 'index', intersect: false },
                    legend: { position: 'top', labels: { font: { family: 'Tajawal' } } },
                    title: { 
                        display: true, 
                        text: 'العجز المائي: مقارنة بين التساقط والتبخر', 
                        font: { family: 'Tajawal', size: 16, weight: 'bold' } 
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'القيمة (مئوية / ملم)' }
                    }
                }
            }
        });
    }
});

// ==========================================
// 5. الرحلة الافتراضية (النوافذ المنبثقة العميقة)
// ==========================================
const tours = {
    marshes: {
        title: "<i class='bi bi-water text-primary'></i> بيئة الأهوار (The Mesopotamian Marshes)",
        content: `
            <div class="p-3">
                <h5 class="fw-bold text-dark border-bottom pb-2">الأهمية الجغرافية والبيئية</h5>
                <p class="text-secondary" style="line-height: 1.8;">
                    تُعد الأهوار أكبر مسطح مائي داخلي في الشرق الأوسط. تلعب دوراً جغرافياً حاسماً كـ "إسفنجة طبيعية" تمتص الفيضانات خلال مواسم ذوبان الثلوج، وتعمل كمرشح طبيعي للرواسب والمواد الكيميائية قبل وصول المياه إلى الخليج العربي.
                </p>
                <h5 class="fw-bold text-dark mt-4 border-bottom pb-2">تحديات البقاء</h5>
                <ul class="list-group list-group-flush mb-3 text-secondary">
                    <li class="list-group-item px-0 border-0"><i class="bi bi-dot text-danger"></i> السدود المشيدة في دول المنبع قللت من التدفقات النهرية.</li>
                    <li class="list-group-item px-0 border-0"><i class="bi bi-dot text-danger"></i> معدلات التبخر العالية بسبب التغير المناخي تزيد من الملوحة.</li>
                </ul>
                <div class="alert alert-info border-start border-4 border-info mt-4">
                    <strong>معلومة إثرائية:</strong> تم إدراج أهوار جنوب العراق ضمن لائحة التراث العالمي لليونسكو في عام 2016 لكونها محمية تنوع بيولوجي ومعلماً ثقافياً.
                </div>
            </div>
        `
    },
    babylon: {
        title: "<i class='bi bi-bank text-success'></i> مدينة بابل الأثرية (Babylon)",
        content: `
            <div class="p-3">
                <h5 class="fw-bold text-dark border-bottom pb-2">الحتمية الجغرافية في نشأة بابل</h5>
                <p class="text-secondary" style="line-height: 1.8;">
                    لم تكن بابل لتزدهر لولا موقعها الاستراتيجي على ضفاف نهر الفرات. وفر النهر الطمي الخصب للزراعة، والطين لبناء الزقورات، وكان شرياناً للملاحة والتجارة بين الخليج العربي شمالاً وجنوباً.
                </p>
                <h5 class="fw-bold text-dark mt-4 border-bottom pb-2">الظواهر الجغرافية المرتبطة</h5>
                <ul class="list-group list-group-flush mb-3 text-secondary">
                    <li class="list-group-item px-0 border-0"><i class="bi bi-check2-square text-success"></i> <strong>الري المنظم:</strong> ابتكر البابليون شبكات معقدة من القنوات للسيطرة على مياه الفيضان.</li>
                    <li class="list-group-item px-0 border-0"><i class="bi bi-check2-square text-success"></i> <strong>تغير مجرى النهر:</strong> تاريخياً، تغير مجرى الفرات عدة مرات، مما أثر على التوزيع السكاني للمدينة.</li>
                </ul>
                <div class="alert alert-success border-start border-4 border-success mt-4">
                    <strong>تأمل جغرافي:</strong> الجغرافيا التاريخية لبابل تدرس كيف تفاعل الإنسان القديم مع معطيات البيئة (تطويع الأنهار) لبناء حضارة حضرية مستدامة.
                </div>
            </div>
        `
    }
};

function openTour(placeId) {
    const data = tours[placeId];
    document.getElementById('tourModalTitle').innerHTML = data.title;
    document.getElementById('tourModalBody').innerHTML = data.content;
    
    const tourModal = new bootstrap.Modal(document.getElementById('tourModal'));
    tourModal.show();
}