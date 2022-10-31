import Image from 'next/image';
import PropTypes from 'prop-types';
import {
	Badge,
	Box,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function ProjectCard({ project }) {
	const {
		id,
		projectImageBanner,
		projectTitle,
		projectDescription,
		toolsUsed,
	} = project;

	return (
		<NextLink href={`/projects/${id}`}>
			<Box borderRadius='md' h='max-content' cursor='pointer'>
				{projectImageBanner && (
					<Box
						w='full'
						pos='relative'
						h='200px'
						mb={5}
						borderRadius={5}
						overflow='hidden'
						borderWidth={1}
					>
						<Image
							src={projectImageBanner}
							objectFit='cover'
							layout='fill'
							alt='Project Banner'
						/>
					</Box>
				)}
				<Heading size='md' color={useColorModeValue('dark', 'light')} mb={5}>
					{projectTitle}
				</Heading>
				<Text color='gray' textAlign='justify'>
					{projectDescription}
				</Text>
				<Flex gap={2} mt={5} flexWrap='wrap'>
					{toolsUsed &&
						toolsUsed.map((tool, index) => (
							<Badge
								textTransform='initial'
								variant='outline'
								colorScheme='green'
								key={index}
							>
								{tool}
							</Badge>
						))}
				</Flex>
			</Box>
		</NextLink>
	);
}

ProjectCard.propTypes = {
	projectTitle: PropTypes.string,
	projectImage: PropTypes.string,
	projectDescription: PropTypes.string,
	toolsUsed: PropTypes.array,
};
