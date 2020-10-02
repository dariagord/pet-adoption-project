import React from "react";
import theme from "theme";
import { Theme, Text, Box, Image, Strong } from "@quarkly/widgets";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section padding="220px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover no-repeat local">
			<Box
				max-width="250px"
				padding="35px 50px 35px 20px"
				background="--color-light"
				color="--dark"
				font="16px --fontFamily-sansHeavy"
				box-shadow="9px 4px 3px 6px #3d8b8b"
			>
				<Text
					as="h2"
					font="normal 900 50px/1.2 --fontFamily-googleOswald"
					margin="0 0 12px 0"
					text-align="center"
					padding="0px px 0px px"
				>
					Adopt your puppy today
				</Text>
				<Text font="normal 300 20px/1.5 --fontFamily-googleOswald" text-align="justify">
					Adopt the Perfect Pet from more than 17,000 animal shelters & rescues. We are a proud recipient of funding from Maddie's Fund, helping to achieve a no-kill nation #ThanksToMaddie.
				</Text>
			</Box>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0" background="rgba(139, 110, 61, 0.12)">
			<Text as="h1" font="normal 900 50px/1.2 --fontFamily-googleOswald" md-font="--headline2" margin="20px 0 0 0">
				Every Pet Needs a Hero
			</Text>
			<Text as="p" font="normal 300 25px/1.5 --fontFamily-googleOswald" margin="20px 0 0 0">
				They’ve gone above and beyond to ensure that animals in need are loved and cared for. Our monthly series features the people, as well as Shelters and Rescues from across the country that continue to make a bigger difference.
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image
						width="320px"
						src="https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30"
						object-fit="cover"
						padding="0px"
						height="504px"
					/>
					<Text font="22px Oswald, sans-serif" text-align="left">
						<Strong>
							Charlie
						</Strong>
						<br />
						Male, Adult
						<br />
						Los Angeles, CA
					</Text>
				</Box>
				<Box padding="10px">
					<Image
						src="https://images.unsplash.com/photo-1597773139169-9aa0a445936d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30"
						width="320px"
						max-width="100%"
						height="504px"
						object-fit="cover"
						padding="0px"
					/>
					<Text font="22px --fontFamily-googleOswald" text-align="left">
						<Strong>
							Mishka
						</Strong>
						<br />
						Male, Young
						<br />
						Beverly Hills, CA
					</Text>
				</Box>
				<Box padding="10px">
					<Image
						src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30"
						width="320px"
						max-width="100%"
						object-fit="cover"
						height="504px"
						padding="0px"
					/>
					<Text font="22px --fontFamily-googleOswald" text-align="left">
						<Strong>
							Seth
						</Strong>
						<br />
						Female, Young
						<br />
						Los Angeles, CA
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="rgba(139, 110, 61, 0.12)" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="px 0"
						font="normal 900 72px/1.2 --fontFamily-googleOswald"
						color="--darkL2"
						letter-spacing="1px"
						text-transform="uppercase"
						text-align="left"
					>
						Why Adopt a Dog Over Buying?
					</Text>
					<Text
						as="h2"
						margin="12px 0"
						font="normal 300 22px/1.5 --fontFamily-googleOswald"
						md-font="--headline3"
						text-align="justify"
					>
						Did you know that over 1,000 people per hour run a search right here looking to adopt a pet? Pet adoption is quickly becoming the preferred way to find a new dog, puppy, cat or kitten. Best of all, there are so many benefits when you adopt a dog or adopt a cat over buying. For instance, pet adoption will almost always be more affordable than buying a puppy for sale from a breeder or finding a kitten for sale from a litter. There are more benefits as well. Since pets in rescues and shelters usually come from a home where the owners ran out of money, got divorced, or had to move, it's common to find that the dogs and cats on our website are already housetrained, good with kids, or do well with other pets. People are finding out that buying a puppy for sale from a breeder isn't all it's cracked up to be, and the dogs and cats don't leave the organization without having their shots and being taken to the vet. That means less stress, and more savings! So what are you waiting for? Go find that perfect pet!
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" color="--dark" flex-direction="column" />
					<Image height="504px" src="https://images.unsplash.com/photo-1507771532819-6d7e64297ddc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30" object-fit="cover" />
					<Image
						height="504px"
						src="https://images.unsplash.com/photo-1507771532819-6d7e64297ddc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30"
						object-fit="cover"
						margin="126px 0px 0px 0px"
						lg-margin="40px 0px 0px 0px"
					/>
				</StackItem>
				<Box />
			</Stack>
		</Section>
	</Theme>;
});