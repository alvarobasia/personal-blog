import fs from "fs";
import path from "path";
import metter from "gray-matter";
function getMDXFiles(directory: fs.PathLike) {
  return fs.readdirSync(directory).filter((file) => {
    return path.extname(file) === ".mdx";
  });
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return metter(rawContent);
}

function getMDXData(directory: string) {
  const mdxFiles = getMDXFiles(directory);

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(directory, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

export function formatedDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);
  const yearAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthAgo = currentDate.getMonth() - targetDate.getMonth();
  const dayAgo = currentDate.getDate() - targetDate.getDate();
  let formattedDate = "";
  if (yearAgo > 0) {
    formattedDate = `${yearAgo} ano${yearAgo > 1 ? "s" : ""} atrás`;
  } else if (monthAgo > 0) {
    formattedDate = `${monthAgo} ${monthAgo > 1 ? "meses" : "mês"} atrás`;
  } else if (dayAgo > 0) {
    formattedDate = `${dayAgo} dia${dayAgo > 1 ? "s" : ""} atrás`;
  } else {
    formattedDate = "Hoje";
  }

  const fullDate = targetDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${formattedDate} - ${fullDate}`;
}
