from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.colors import HexColor, black, white
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

OUT = Path(r"e:\portfolio\personal-website\public\cv-hector-mbakama.pdf")
ACCENT = HexColor("#0d7377")
MUTED = HexColor("#555555")
TEXT = HexColor("#1a1a1a")


def section_title(text: str) -> list:
    return [
        Spacer(1, 8),
        Paragraph(text, ParagraphStyle(
            "Section",
            fontName="Helvetica-Bold",
            fontSize=11,
            textColor=ACCENT,
            spaceAfter=2,
            spaceBefore=4,
        )),
        HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=6),
    ]


def bullet(text: str) -> Paragraph:
    return Paragraph(
        f"• {text}",
        ParagraphStyle(
            "Bullet",
            fontName="Helvetica",
            fontSize=9,
            textColor=TEXT,
            leading=12,
            leftIndent=8,
            spaceAfter=2,
        ),
    )


def build():
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=14 * mm,
    )

    styles = getSampleStyleSheet()
    name = ParagraphStyle(
        "Name",
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=26,
        textColor=black,
        spaceAfter=8,
    )
    role = ParagraphStyle(
        "Role",
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=16,
        textColor=ACCENT,
        spaceAfter=6,
    )
    contact = ParagraphStyle(
        "Contact",
        fontName="Helvetica",
        fontSize=9,
        leading=13,
        textColor=MUTED,
        spaceAfter=10,
    )
    body = ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=9.5,
        textColor=TEXT,
        leading=13,
        spaceAfter=4,
    )
    job_title = ParagraphStyle(
        "JobTitle",
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=14,
        textColor=TEXT,
        spaceAfter=2,
    )
    meta = ParagraphStyle(
        "Meta",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=MUTED,
        spaceAfter=4,
    )
    tag = ParagraphStyle(
        "Tag",
        fontName="Helvetica",
        fontSize=8,
        textColor=ACCENT,
        leading=12,
    )

    story = []
    story.append(Paragraph("Hector MBAKAMA", name))
    story.append(Spacer(1, 4))
    story.append(
        Paragraph(
            "Développeur Fullstack TypeScript | Angular, React, NestJS, Laravel, Next.js",
            role,
        )
    )
    story.append(Spacer(1, 2))
    story.append(
        Paragraph(
            "hectormbakama92@gmail.com  ·  +243 814 532 227  ·  Kinshasa, RDC  ·  "
            "linkedin.com/in/hector-mbakama-bb1696276  ·  github.com/mbakama",
            contact,
        )
    )

    story.extend(section_title("PROFIL"))
    story.append(
        Paragraph(
            "Développeur Fullstack avec plus de 3 ans d'expérience dans la conception "
            "et le développement d'applications web modernes. Intervention sur l'ensemble "
            "du cycle : interfaces utilisateur, services backend, bases de données, "
            "APIs REST et déploiement. Application des principes SOLID, Clean Code et "
            "bonnes pratiques d'architecture.",
            body,
        )
    )

    story.extend(section_title("EXPÉRIENCE"))
    story.append(Paragraph("Développeur Fullstack", job_title))
    story.append(
        Paragraph(
            "Hologram Identification Service · Kinshasa, RDC  |  2023-04 – Présent",
            meta,
        )
    )
    for item in [
        "Analyse des besoins fonctionnels et rédaction de spécifications techniques pour des modules de contrôle fiscal.",
        "Développement Fullstack TypeScript (Frontend Angular/PrimeNG ; Backend NestJS/Laravel).",
        "Développement de modules métier : gestion foncière, création de contribuables.",
        "Optimisation de bases de données SQL Server.",
        "Assurance qualité avec Jest et code reviews.",
        "Mise en place de pipelines CI/CD avec GitLab et Git.",
        "Collaboration Agile (Scrum).",
        "Maintenance évolutive et documentation technique.",
    ]:
        story.append(bullet(item))

    story.extend(section_title("FORMATION"))
    story.append(
        Paragraph(
            "Licence — Anglais et Informatique des Affaires",
            job_title,
        )
    )
    story.append(
        Paragraph("Université de Kinshasa  |  2017-10 – 2023-04", meta)
    )
    story.append(
        Paragraph(
            "Formation alliant linguistique et informatique de gestion.",
            body,
        )
    )
    story.append(
        Paragraph(
            "Formation — Modélisation et conception de bases de données relationnelles (Microsoft SQL Server)",
            job_title,
        )
    )
    story.append(
        Paragraph(
            "Institut National de Préparation Professionnelle (INPP)  |  2021-09",
            meta,
        )
    )
    story.append(
        Paragraph(
            "Conception de schémas relationnels et optimisation de requêtes SQL.",
            body,
        )
    )

    story.extend(section_title("PROJETS"))
    projects = [
        (
            "Draftio — Plateforme SaaS de devis professionnels",
            "https://draftio-alpha.vercel.app",
            "Next.js, NestJS, TypeScript, PostgreSQL, TypeORM, Tailwind, Vercel",
            "SaaS pour freelances/PME : devis, clients, facturation, suivi des statuts, API NestJS + JWT.",
        ),
        (
            "ERP-DGI — Système intégré de gestion fiscale",
            None,
            "Angular, Laravel, SQL Server",
            "Modules de contrôle et d'exonération, UI Angular, optimisation SQL Server.",
        ),
        (
            "eRecettes (DGRK) — Gestion des recettes publiques",
            "https://erecettes.cd/#/",
            "Angular, NestJS, Laravel, SQL Server",
            "Processus métier contribuables/patrimoines, APIs REST, environnement Agile Scrum.",
        ),
        (
            "UniPilot — SaaS de gestion universitaire multi-tenant",
            None,
            "Angular, Laravel, MySQL",
            "Étudiants, inscriptions, paiements en ligne, impression de cartes étudiantes.",
        ),
        (
            "Amani — Partage artistique bahá'í (RDC)",
            "https://github.com/mbakama/amani",
            "Next.js, NestJS, TypeScript, PWA",
            "Publication d'œuvres (musique, slam, poésie), événements/lives, écoute publique.",
        ),
        (
            "Bahá'í Community — Portail communautaire",
            "https://github.com/mbakama/bahai-community",
            "Angular, NestJS, Prisma, PostgreSQL",
            "Recensement, élections, vote personnel, notifications temps réel.",
        ),
    ]
    for title, url, tech, desc in projects:
        label = title if not url else f'{title} — <link href="{url}" color="#0d7377"><u>{url}</u></link>'
        story.append(Paragraph(label, job_title))
        story.append(Paragraph(f"Technologies : {tech}", meta))
        story.append(Paragraph(desc, body))

    story.extend(section_title("COMPÉTENCES"))
    story.append(
        Paragraph(
            "TypeScript · Angular · React · Next.js · NestJS · Node.js · Laravel · PHP · "
            "API REST · GraphQL · HTML5 · CSS3 · SASS · RxJS · Tailwind · Jest · Cypress · "
            "Git · GitLab CI/CD · GitHub Actions · Docker · PostgreSQL · MySQL · TypeORM · "
            "Prisma · SQL Server · SOLID · Clean Code · Scrum · Kanban · Jira · Azure DevOps",
            tag,
        )
    )

    story.extend(section_title("LANGUES"))
    story.append(Paragraph("Français — Courant  ·  Anglais — Technique", body))

    doc.build(story)
    print(f"written={OUT} size={OUT.stat().st_size}")


if __name__ == "__main__":
    build()
