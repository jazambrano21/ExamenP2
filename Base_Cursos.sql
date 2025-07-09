--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-07-09 10:29:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16438)
-- Name: curso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.curso (
    id_curso integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    estado character varying(20) NOT NULL,
    id_creador integer
);


ALTER TABLE public.curso OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16437)
-- Name: curso_id_curso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.curso_id_curso_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.curso_id_curso_seq OWNER TO postgres;

--
-- TOC entry 4925 (class 0 OID 0)
-- Dependencies: 219
-- Name: curso_id_curso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.curso_id_curso_seq OWNED BY public.curso.id_curso;


--
-- TOC entry 222 (class 1259 OID 16452)
-- Name: suscripcion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.suscripcion (
    id_suscripcion integer NOT NULL,
    id_usuario integer,
    id_curso integer,
    fecha timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.suscripcion OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16451)
-- Name: suscripcion_id_suscripcion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.suscripcion_id_suscripcion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.suscripcion_id_suscripcion_seq OWNER TO postgres;

--
-- TOC entry 4926 (class 0 OID 0)
-- Dependencies: 221
-- Name: suscripcion_id_suscripcion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.suscripcion_id_suscripcion_seq OWNED BY public.suscripcion.id_suscripcion;


--
-- TOC entry 218 (class 1259 OID 16429)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    nombres character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    tipo_usuario character varying(20) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16428)
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 4927 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- TOC entry 4753 (class 2604 OID 16441)
-- Name: curso id_curso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso ALTER COLUMN id_curso SET DEFAULT nextval('public.curso_id_curso_seq'::regclass);


--
-- TOC entry 4754 (class 2604 OID 16455)
-- Name: suscripcion id_suscripcion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suscripcion ALTER COLUMN id_suscripcion SET DEFAULT nextval('public.suscripcion_id_suscripcion_seq'::regclass);


--
-- TOC entry 4752 (class 2604 OID 16432)
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- TOC entry 4917 (class 0 OID 16438)
-- Dependencies: 220
-- Data for Name: curso; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.curso VALUES (1, 'python', 'curso basico ', 'activo', 1);
INSERT INTO public.curso VALUES (2, 'python', 'curso basico ', 'activo', 1);
INSERT INTO public.curso VALUES (7, 'mongo', 'mongo 1', 'activo', 1);
INSERT INTO public.curso VALUES (6, 'Python Básico', 'Introducción a Python', 'activo', 2);
INSERT INTO public.curso VALUES (9, 'JavaScript Avanzado', 'JS moderno con ES6+', 'en construcción', 2);
INSERT INTO public.curso VALUES (3, 'Bases de Datos', 'Fundamentos de SQL y PostgreSQL', 'activo', 3);
INSERT INTO public.curso VALUES (4, 'ReactJS', 'SPA con React', 'inactivo', 3);
INSERT INTO public.curso VALUES (5, 'MongoDB', 'NoSQL con Mongo', 'activo', 2);


--
-- TOC entry 4919 (class 0 OID 16452)
-- Dependencies: 222
-- Data for Name: suscripcion; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.suscripcion VALUES (1, 1, 2, '2025-07-09 09:24:19.222312');
INSERT INTO public.suscripcion VALUES (6, 4, 1, '2025-07-09 10:23:06.079076');
INSERT INTO public.suscripcion VALUES (2, 4, 3, '2025-07-09 10:23:06.079076');
INSERT INTO public.suscripcion VALUES (3, 5, 1, '2025-07-09 10:23:06.079076');
INSERT INTO public.suscripcion VALUES (4, 5, 5, '2025-07-09 10:23:06.079076');
INSERT INTO public.suscripcion VALUES (5, 4, 4, '2025-07-09 10:23:06.079076');


--
-- TOC entry 4915 (class 0 OID 16429)
-- Dependencies: 218
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario VALUES (1, 'josue', 'zambrano', 'josuez1311@hotmail.com', '123', 'admin');
INSERT INTO public.usuario VALUES (6, 'anthony', 'Zambrano', 'jazambrano21@espe.edu.ec', '123', 'consumidor');
INSERT INTO public.usuario VALUES (20, 'Admin', 'Sistema', 'admin@admin.com', '12345678', 'administrador');
INSERT INTO public.usuario VALUES (2, 'Carlos', 'Creador1', 'carlos@creador.com', 'creador123', 'creador');
INSERT INTO public.usuario VALUES (3, 'Lucía', 'Creadora2', 'lucia@creador.com', 'lucia456', 'creador');
INSERT INTO public.usuario VALUES (4, 'Ana', 'Consumidora1', 'ana@consumidor.com', 'ana789', 'consumidor');
INSERT INTO public.usuario VALUES (5, 'Luis', 'Consumidor2', 'luis@consumidor.com', 'luis321', 'consumidor');


--
-- TOC entry 4928 (class 0 OID 0)
-- Dependencies: 219
-- Name: curso_id_curso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.curso_id_curso_seq', 7, true);


--
-- TOC entry 4929 (class 0 OID 0)
-- Dependencies: 221
-- Name: suscripcion_id_suscripcion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.suscripcion_id_suscripcion_seq', 9, true);


--
-- TOC entry 4930 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 6, true);


--
-- TOC entry 4761 (class 2606 OID 16445)
-- Name: curso curso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (id_curso);


--
-- TOC entry 4763 (class 2606 OID 16460)
-- Name: suscripcion suscripcion_id_usuario_id_curso_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suscripcion
    ADD CONSTRAINT suscripcion_id_usuario_id_curso_key UNIQUE (id_usuario, id_curso);


--
-- TOC entry 4765 (class 2606 OID 16458)
-- Name: suscripcion suscripcion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suscripcion
    ADD CONSTRAINT suscripcion_pkey PRIMARY KEY (id_suscripcion);


--
-- TOC entry 4757 (class 2606 OID 16436)
-- Name: usuario usuario_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);


--
-- TOC entry 4759 (class 2606 OID 16434)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 4766 (class 2606 OID 16446)
-- Name: curso curso_id_creador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_id_creador_fkey FOREIGN KEY (id_creador) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 4767 (class 2606 OID 16466)
-- Name: suscripcion suscripcion_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suscripcion
    ADD CONSTRAINT suscripcion_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.curso(id_curso);


--
-- TOC entry 4768 (class 2606 OID 16461)
-- Name: suscripcion suscripcion_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suscripcion
    ADD CONSTRAINT suscripcion_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


-- Completed on 2025-07-09 10:29:20

--
-- PostgreSQL database dump complete
--

