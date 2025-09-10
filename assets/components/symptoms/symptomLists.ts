import ChildrenSVG from "app/components/symptoms/svgs/childrenSVG"
import CoughSVG from "app/components/symptoms/svgs/coughSVG"
import DiarrheaSVG from "app/components/symptoms/svgs/diarrheaSVG"
import EyeSVG from "app/components/symptoms/svgs/eyeSVG"
import FeverSVG from "app/components/symptoms/svgs/feverSVG"
import InjurySVG from "app/components/symptoms/svgs/injurySVG"
import PainSVG from "app/components/symptoms/svgs/painSVG"

import UrineSVG from "app/components/symptoms/svgs/urineSVG"
import AllergicSVG from "app/components/symptoms/svgs/allergySVG"
import MentalSVG from "app/components/symptoms/svgs/mentalSVG"
import WomanSVG from "app/components/symptoms/svgs/womanIssueSVG"
import SkinSVG from "app/components/symptoms/svgs/skinSVG"
import { allergic, children, cough, diarea, eye, fever, injuries, painful, tummy, urine } from "app/images/symptoms"
import React from "react"

type SymptomItem = {
  id: number
  Icon: (props: any) => React.JSX.Element
  title: string
  image?: any
}

export const SYMPTOMS: SymptomItem[] = [
  {
    id: 1,
    title: "consultation.symptoms.fever",
    image: fever,
    Icon: FeverSVG,
  },
  {
    id: 2,
    title: "consultation.symptoms.cough",
    image: cough,
    Icon: CoughSVG,
  },
  {
    id: 3,
    title: "consultation.symptoms.eyes",
    image: eye,
    Icon: EyeSVG,
  },
  {
    id: 4,
    title: "consultation.symptoms.allergy",
    image: allergic,
    Icon: AllergicSVG,
  },
  {
    id: 5,
    title: "consultation.symptoms.tummy",
    image: tummy,
    Icon: SkinSVG,
  },
  {
    id: 6,
    title: "consultation.symptoms.diarrhea",
    image: diarea,
    Icon: DiarrheaSVG,
  },
  {
    id: 7,
    title: "consultation.symptoms.urine",
    image: urine,
    Icon: UrineSVG,
  },
  {
    id: 8,
    title: "consultation.symptoms.pain",
    image: painful,
    Icon: PainSVG,
  },
  {
    id: 9,
    title: "consultation.symptoms.injury",
    image: injuries,
    Icon: InjurySVG,
  },
  {
    id: 10,
    title: "consultation.symptoms.children",
    image: children,
    Icon: ChildrenSVG,
  },
   {
    id: 11,
    title: "consultation.symptoms.mental",
    image: children,
    Icon: MentalSVG,
  },
   {
    id: 12,
    title: "consultation.symptoms.women",
    image: children,
    Icon: WomanSVG,
  },
]
