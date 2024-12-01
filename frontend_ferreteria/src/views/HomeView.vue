<script setup lang="ts"></script>

<template>
  <div>
    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-5">
      <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <img
              class="w-100"
              src="@/assets/img/carousel-bg-1.jpg"
              alt="Imagen de ferretería"
            />
            <div class="carousel-caption d-flex align-items-center">
              <div class="container">
                <div
                  class="row align-items-center justify-content-center justify-content-lg-start"
                >
                  <div class="col-10 col-lg-7 text-center text-lg-start">
                    <h6
                      class="text-white text-uppercase mb-3 animated slideInDown"
                    >
                      // Herramientas y Materiales //
                    </h6>
                    <h1
                      class="display-3 text-white mb-4 pb-3 animated slideInDown"
                    >
                      Variedad y Calidad en Productos para tu Proyecto
                    </h1>
                    <a
                      href="#"
                      class="btn btn-primary py-3 px-5 animated slideInDown"
                      >Conoce Más<i class="fa fa-arrow-right ms-3"></i
                    ></a>
                  </div>
                  <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img
                      class="img-fluid"
                      src="@/assets/img/carousel-1.png"
                      alt="Herramientas"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <img
              class="w-100"
              src="@/assets/img/carousel-bg-2.jpg"
              alt="Imagen de construcción"
            />
            <div class="carousel-caption d-flex align-items-center">
              <div class="container">
                <div
                  class="row align-items-center justify-content-center justify-content-lg-start"
                >
                  <div class="col-10 col-lg-7 text-center text-lg-start">
                    <h6
                      class="text-white text-uppercase mb-3 animated slideInDown"
                    >
                      // Servicios para Construcción //
                    </h6>
                    <h1
                      class="display-3 text-white mb-4 pb-3 animated slideInDown"
                    >
                      Todo lo que Necesitas para Obras y Reformas
                    </h1>
                    <a
                      href="#"
                      class="btn btn-primary py-3 px-5 animated slideInDown"
                      >Explorar<i class="fa fa-arrow-right ms-3"></i
                    ></a>
                  </div>
                  <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img
                      class="img-fluid"
                      src="@/assets/img/carousel-2.png"
                      alt="Construcción"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controles -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
    <!-- Carousel End -->

    <!-- Service Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Servicio de Calidad -->
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="d-flex py-5 px-4">
              <i class="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
              <div class="ps-4">
                <h5 class="mb-3">Productos Certificados</h5>
                <p>
                  Ofrecemos materiales y herramientas de la más alta calidad,
                  garantizando un excelente rendimiento.
                </p>
                <a class="text-secondary border-bottom" href="">Leer Más</a>
              </div>
            </div>
          </div>
          <!-- Personal Experto -->
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="d-flex bg-light py-5 px-4">
              <i class="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
              <div class="ps-4">
                <h5 class="mb-3">Personal Capacitado</h5>
                <p>
                  Contamos con un equipo de expertos para asesorarte en la
                  elección de los materiales ideales para tus proyectos.
                </p>
                <a class="text-secondary border-bottom" href="">Leer Más</a>
              </div>
            </div>
          </div>
          <!-- Equipos Modernos -->
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="d-flex py-5 px-4">
              <i class="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
              <div class="ps-4">
                <h5 class="mb-3">Herramientas Modernas</h5>
                <p>
                  Disponemos de una amplia gama de herramientas modernas para
                  facilitar cualquier tipo de construcción o reparación.
                </p>
                <a class="text-secondary border-bottom" href="">Leer Más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service End -->

    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Imagen de experiencia -->
          <div class="col-lg-6 pt-4" style="min-height: 400px">
            <div
              class="position-relative h-100 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <img
                class="position-absolute img-fluid w-100 h-100"
                src="@/assets/img/about.jpg"
                style="object-fit: cover"
                alt="Ferretería"
              />
              <div
                class="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                style="background: rgba(0, 0, 0, 0.08)"
              >
                <h1 class="display-4 text-white mb-0">
                  15 <span class="fs-4">Años</span>
                </h1>
                <h4 class="text-white">De Experiencia</h4>
              </div>
            </div>
          </div>
          <!-- Contenido sobre nosotros -->
          <div class="col-lg-6">
            <h6 class="text-primary text-uppercase">// Sobre Nosotros //</h6>
            <h1 class="mb-4">
              <span class="text-primary">Ferretería Total</span> Tu Mejor Aliado
            </h1>
            <p class="mb-4">
              Contamos con más de 15 años brindando materiales de calidad,
              herramientas modernas y un servicio excepcional. Nuestra misión es
              ser el soporte ideal para tus proyectos de construcción y mejoras.
            </p>
            <div class="row g-4 mb-3 pb-3">
              <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                <div class="d-flex">
                  <div
                    class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style="width: 45px; height: 45px"
                  >
                    <span class="fw-bold text-secondary">01</span>
                  </div>
                  <div class="ps-3">
                    <h6>Equipo Profesional</h6>
                    <span
                      >Asesoramiento experto para que encuentres lo que
                      necesitas.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                <div class="d-flex">
                  <div
                    class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style="width: 45px; height: 45px"
                  >
                    <span class="fw-bold text-secondary">02</span>
                  </div>
                  <div class="ps-3">
                    <h6>Materiales de Calidad</h6>
                    <span
                      >Productos garantizados para durar y rendir en tus
                      proyectos.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                <div class="d-flex">
                  <div
                    class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style="width: 45px; height: 45px"
                  >
                    <span class="fw-bold text-secondary">03</span>
                  </div>
                  <div class="ps-3">
                    <h6>Amplia Variedad</h6>
                    <span
                      >Una extensa selección de herramientas y materiales.</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <a href="" class="btn btn-primary py-3 px-5"
              >Leer Más<i class="fa fa-arrow-right ms-3"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!-- About End -->

    <!-- Fact Start -->
    <div class="container-fluid fact bg-dark my-5 py-5">
      <div class="container">
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <i class="fa fa-check fa-2x text-white mb-3"></i>
            <h2 class="text-white mb-2" data-toggle="counter-up">20</h2>
            <p class="text-white mb-0">Años de Experiencia</p>
          </div>
          <div
            class="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.3s"
          >
            <i class="fa fa-users-cog fa-2x text-white mb-3"></i>
            <h2 class="text-white mb-2" data-toggle="counter-up">50</h2>
            <p class="text-white mb-0">Técnicos Expertos</p>
          </div>
          <div
            class="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.5s"
          >
            <i class="fa fa-users fa-2x text-white mb-3"></i>
            <h2 class="text-white mb-2" data-toggle="counter-up">1000</h2>
            <p class="text-white mb-0">Clientes Satisfechos</p>
          </div>
          <div
            class="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.7s"
          >
            <i class="fa fa-tools fa-2x text-white mb-3"></i>
            <h2 class="text-white mb-2" data-toggle="counter-up">500</h2>
            <p class="text-white mb-0">Proyectos Completados</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fact End -->

    <!-- Service Start -->
    <div class="container-xxl servicio py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="text-primary text-uppercase">// Nuestros Servicios //</h6>
          <h1 class="mb-5">Explora Nuestros Servicios</h1>
        </div>
        <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div class="col-lg-4">
            <div class="nav w-100 nav-pills me-4">
              <button
                class="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-1"
                type="button"
              >
                <i class="fa fa-wrench fa-2x me-3"></i>
                <h4 class="m-0">Pruebas de Diagnóstico</h4>
              </button>
              <button
                class="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-2"
                type="button"
              >
                <i class="fa fa-tools fa-2x me-3"></i>
                <h4 class="m-0">Mantenimiento de Herramientas</h4>
              </button>
              <button
                class="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-3"
                type="button"
              >
                <i class="fa fa-cogs fa-2x me-3"></i>
                <h4 class="m-0">Reemplazo de Componentes</h4>
              </button>
              <button
                class="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-4"
                type="button"
              >
                <i class="fa fa-paint-brush fa-2x me-3"></i>
                <h4 class="m-0">Pintura y Acabado</h4>
              </button>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tab-content w-100">
              <div class="tab-pane fade show active" id="tab-pane-1">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 350px">
                    <div class="position-relative h-100">
                      <img
                        class="position-absolute img-fluid w-100 h-100"
                        src="@/assets/img/service-1.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">15 Años de Experiencia en Diagnóstico</h3>
                    <p class="mb-4">
                      Realizamos diagnósticos precisos para identificar fallos y
                      asegurar el buen funcionamiento de tus herramientas.
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Servicio de
                      calidad
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Trabajo por
                      expertos
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Equipos
                      modernos
                    </p>
                    <a href="" class="btn btn-primary py-3 px-5 mt-3"
                      >Leer Más<i class="fa fa-arrow-right ms-3"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-2">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 350px">
                    <div class="position-relative h-100">
                      <img
                        class="position-absolute img-fluid w-100 h-100"
                        src="@/assets/img/service-2.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">Mantenimiento de Herramientas</h3>
                    <p class="mb-4">
                      Ofrecemos mantenimiento preventivo y correctivo para todas
                      las herramientas en tu ferretería.
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Servicio de
                      calidad
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Trabajo por
                      expertos
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Equipos
                      modernos
                    </p>
                    <a href="" class="btn btn-primary py-3 px-5 mt-3"
                      >Leer Más<i class="fa fa-arrow-right ms-3"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-3">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 350px">
                    <div class="position-relative h-100">
                      <img
                        class="position-absolute img-fluid w-100 h-100"
                        src="@/assets/img/service-3.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">Reemplazo de Componentes</h3>
                    <p class="mb-4">
                      Sustituimos componentes dañados o desgastados para que tus
                      herramientas y maquinaria sigan funcionando de manera
                      óptima.
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Reemplazo
                      rápido y eficiente
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Expertos en
                      reparaciones
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Repuestos de
                      alta calidad
                    </p>
                    <a href="" class="btn btn-primary py-3 px-5 mt-3"
                      >Leer Más<i class="fa fa-arrow-right ms-3"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-4">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 350px">
                    <div class="position-relative h-100">
                      <img
                        class="position-absolute img-fluid w-100 h-100"
                        src="@/assets/img/service-4.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">Pintura y Acabado</h3>
                    <p class="mb-4">
                      Realizamos trabajos de pintura y acabado para todas tus
                      herramientas y maquinaria.
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Acabados
                      profesionales
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Servicio
                      personalizado
                    </p>
                    <p>
                      <i class="fa fa-check text-success me-3"></i>Equipos de
                      pintura especializados
                    </p>
                    <a href="" class="btn btn-primary py-3 px-5 mt-3"
                      >Leer Más<i class="fa fa-arrow-right ms-3"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service End -->

    <!-- Booking Start -->
    <div
  class="container-fluid bg-secondary booking my-5 wow fadeInUp"
  data-wow-delay="0.1s"
>
  <div class="container">
    <div class="row gx-5">
      <!-- Columna izquierda con la descripción -->
      <div class="col-lg-6 py-5">
        <div class="py-5">
          <h1 class="text-white mb-4">
            Proveedor Certificado y Galardonado de Servicios de Reparación y Suministros para Ferretería
          </h1>

        </div>
      </div>

      <!-- Columna derecha con el formulario de reserva -->
      <div class="col-lg-6">
        <div
          class="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
          data-wow-delay="0.6s"
        >
          <h1 class="text-white mb-4">Reserva un Servicio</h1>
          <form>
            <div class="row g-3">
              <!-- Campos de Nombre y Correo Electrónico -->
              <div class="col-12 col-sm-6">
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Tu Nombre"
                  style="height: 55px"
                />
              </div>
              <div class="col-12 col-sm-6">
                <input
                  type="email"
                  class="form-control border-0"
                  placeholder="Tu Correo Electrónico"
                  style="height: 55px"
                />
              </div>

              <!-- Selección de Servicio y Selector de Fecha -->
              <div class="col-12 col-sm-6">
                <select class="form-select border-0" style="height: 55px">
                  <option selected>Selecciona un Servicio</option>
                  <option value="1">Reparación de Herramientas</option>
                  <option value="2">Mantenimiento de Maquinaria</option>
                  <option value="3">Suministro de Productos de Ferretería</option>
                </select>
              </div>
              <div class="col-12 col-sm-6">
                <div class="date" id="date1" data-target-input="nearest">
                  <input
                    type="text"
                    class="form-control border-0 datetimepicker-input"
                    placeholder="Fecha del Servicio"
                    data-target="#date1"
                    data-toggle="datetimepicker"
                    style="height: 55px"
                  />
                </div>
              </div>

              <!-- Solicitudes Especiales y Botón de Envío -->
              <div class="col-12">
                <textarea
                  class="form-control border-0"
                  placeholder="Solicitudes Especiales"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-secondary w-100 py-3" type="submit">
                  Reservar Ahora
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Booking End -->

    <!-- Team Start -->
    <div class="container-xxl py-5">
  <div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 class="text-primary text-uppercase">// Nuestros Técnicos Expertos //</h6>
      <h1 class="mb-5">Conoce a Nuestros Técnicos Expertos</h1>
    </div>
    <div class="row g-4">
      <!-- Técnico 1 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="@/assets/img/team-1.jpg" alt="" />
            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="bg-light text-center p-4">
            <h5 class="fw-bold mb-0">Juan Pérez</h5>
            <small>Técnico Principal</small>
          </div>
        </div>
      </div>

      <!-- Técnico 2 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div class="team-item">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="@/assets/img/team-2.jpg" alt="" />
            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="bg-light text-center p-4">
            <h5 class="fw-bold mb-0">Ana Gómez</h5>
            <small>Especialista en Herramientas</small>
          </div>
        </div>
      </div>

      <!-- Técnico 3 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div class="team-item">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="@/assets/img/team-3.jpg" alt="" />
            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="bg-light text-center p-4">
            <h5 class="fw-bold mb-0">Carlos López</h5>
            <small>Experto en Electricidad</small>
          </div>
        </div>
      </div>

      <!-- Técnico 4 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div class="team-item">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="@/assets/img/team-4.jpg" alt="" />
            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square mx-1" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="bg-light text-center p-4">
            <h5 class="fw-bold mb-0">María Rodríguez</h5>
            <small>Especialista en Fontanería</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Team End -->

    <!-- Testimonial Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container">
    <div class="text-center">
      <h6 class="text-primary text-uppercase">// Testimonios //</h6>
      <h1 class="mb-5">¡Lo que dicen nuestros clientes!</h1>
    </div>
    <div class="owl-carousel testimonial-carousel position-relative">
      <!-- Testimonio 1 -->
      <div class="testimonial-item text-center">
        <img
          class="bg-light rounded-circle p-2 mx-auto mb-3"
          src="@/assets/img/testimonial-1.jpg"
          style="width: 80px; height: 80px"
        />
        <h5 class="mb-0">Nombre del Cliente</h5>
        <p>Profesión</p>
        <div class="testimonial-text bg-light text-center p-4">
          <p class="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>

      <!-- Testimonio 2 -->
      <div class="testimonial-item text-center">
        <img
          class="bg-light rounded-circle p-2 mx-auto mb-3"
          src="@/assets/img/testimonial-2.jpg"
          style="width: 80px; height: 80px"
        />
        <h5 class="mb-0">Nombre del Cliente</h5>
        <p>Profesión</p>
        <div class="testimonial-text bg-light text-center p-4">
          <p class="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>

      <!-- Testimonio 3 -->
      <div class="testimonial-item text-center">
        <img
          class="bg-light rounded-circle p-2 mx-auto mb-3"
          src="@/assets/img/testimonial-3.jpg"
          style="width: 80px; height: 80px"
        />
        <h5 class="mb-0">Nombre del Cliente</h5>
        <p>Profesión</p>
        <div class="testimonial-text bg-light text-center p-4">
          <p class="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>

      <!-- Testimonio 4 -->
      <div class="testimonial-item text-center">
        <img
          class="bg-light rounded-circle p-2 mx-auto mb-3"
          src="@/assets/img/testimonial-4.jpg"
          style="width: 80px; height: 80px"
        />
        <h5 class="mb-0">Nombre del Cliente</h5>
        <p>Profesión</p>
        <div class="testimonial-text bg-light text-center p-4">
          <p class="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  <!-- Testimonial End -->
</template>

<style scoped></style>
