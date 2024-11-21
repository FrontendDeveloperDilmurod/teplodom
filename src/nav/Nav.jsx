"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import img1 from "../nav/img/header.jpg";
import {
  Box,
  Flex,
  Button,
  HStack,
  useDisclosure,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Router Link komponenti
import img_1 from "../nav/img/image1.png";
import img_2 from "../nav/img/image2.png";
import img_3 from "../nav/img/image3.png";
import img_4 from "../nav/img/image4.png";

const Links = [
  { name: "Товары по акции", path: "/discount" },
  { name: "Новинки", path: "/new" },
  { name: "Поставщикам", path: "/forCurer" },
  { name: "Контакты", path: "/contact" },
  { name: "Возврат товара", path: "/returnPro" },
];

const NavLink = ({ children, path }) => {
  return (
    <Link to={path}>
      <Button
        variant="outline"
        colorScheme="teal"
        w="full"
        style={{
          padding: "20px",
          paddingRight: "40px",
          paddingLeft: "40px",
          background: "#FFB12A",
          color: "white",
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default function ResponsiveNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <HStack spacing={4} display={{ base: "none", lg: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <Button
            display={{ base: "block", lg: "none" }}
            onClick={onOpen}
            variant="outline"
          >
            <RxHamburgerMenu />
          </Button>
          <input
            type="text"
            placeholder="Search.."
            className="p-2 w-96 border-0 outline-none rounded-lg shadow-md md:hidden lg:hidden"
          />
        </Flex>
      </Box>
      {/* Drawer component */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                gap: "20px",
              }}
            >
              <img src={img1} alt="" />
              <div>
                <p>TEPLODOM</p>
                <p style={{ fontSize: "13px" }}>
                  Интернет магазин строй материалов
                </p>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={6}>
                {Links.map((link) => (
                  <NavLink key={link.name} path={link.path}>
                    {link.name}
                  </NavLink>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
