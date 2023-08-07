"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { SubTitle } from "../ui/SubTitle";
import { TextArea } from "../ui/TextArea";
import {
  AiFillInstagram,
  AiFillGithub,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

export function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="mt-28 mb-10 flex flex-col xs:flex-row gap-8" data-aos="zoom-in-up">
      <div className="w-full xs:w-[48%] space-y-2">
        <SubTitle>Let’s Work Together</SubTitle>
        <p>
          I'm excited to learn more about your projects and exciting ideas too!
          Feel free to leave a message below, and let's start an amazing
          collaboration together...
        </p>
        <div className="flex gap-2">
          <Link href="https://www.linkedin.com/in/jose-almiro-b0007b21a/" target="_blank">
            <FaLinkedinIn className="cursor-pointer" />
          </Link>
          <Link href="https://github.com/JoseAlmiroNeto" target="_blank">
            <AiFillGithub className="cursor-pointer" />
          </Link>
          <Link href="" target="_blank">
            <BiLogoGmail className="cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/jose_almiro_neto/" target="_blank">
            <AiFillInstagram className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <form action="" className="space-y-2 flex-1">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="E-mail" />
        <TextArea placeholder="Messege" rows={5} />
        <Button className="font-bold text-sm">
          Send Messege <AiOutlineArrowRight />
        </Button>
      </form>
    </main>
  );
}
