import type { IProject } from "../../types"

export interface IProjectCardProps {
  data: IProject
}

export const ProjectCard: React.FC<IProjectCardProps> = ({ data }) => {
  return <div className="bg-bg-card border border-border rounded-xl p-4 flex flex-col gap-3 hover:border-accent hover:-translate-y-1 transition-all duration-250">
    <h3 className="text-sm font-semibold text-text-primary">{data.title}</h3>
    <p className="text-xs text-text-muted leading-relaxed">{data.description}</p>
    {Array.isArray(data.techs) && <div className="flex flex-wrap gap-2 mt-auto">
      {data.techs.map(tech => (<span key={tech} className="px-2.5 py-1 rounded bg-accent-bg text-accent-light text-xs font-mono">{tech}</span>))}
    </div>}
  </div>

}